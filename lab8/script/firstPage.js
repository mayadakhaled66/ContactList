var textElement;
var retreivedArray;
var userPhone;
var Email;
var gender;
var id = 1;
function getContact ()
{		
	retreivedArray = JSON.parse(localStorage.getItem('contacts')) || [];		
	for (var counter = 0 ; counter < retreivedArray.length ;counter++)
	{
		
		console.log(retreivedArray[counter].name);
		var pName  = retreivedArray[counter].name;
		var pPhone = retreivedArray[counter].phone;
		var pEmail = retreivedArray[counter].email;
		var pGender = retreivedArray[counter].gender;
		
		if (removeQoutation(pGender) =="female")
		{
			$("ul").append('<li onclick="contactDet(this ,'+pPhone+' , '+pEmail+' , '+pGender+' )" ><a href="#thirdPage" data-transition="flip"><img src="images/user-female.png" width="50" height="50">'+pName+'<a href="tel:'+pPhone+'" data-role="button" date-icon="phone"></a></a></li>');
		}                  
		else 
		{
			$("ul").append('<li onclick="contactDet(this,'+pPhone+' , '+pEmail+' ,'+pGender+')"><a href="#thirdPage" data-transition="flip"><img src="images/user-male.png" width="50" height="50">'+pName+'<a href="tel:'+pPhone+'" data-role="button"  date-icon="phone"></a></a></li>');

		}
		
	}
}

window.onload = getContact;
	

function setName()
{
	
	document.getElementById("contactName").innerHTML= textElement;
		
}


$(function(){
	$("#buttonId").click(function(){
		$("#dialog").dialog({
			width:430 ,
			height :200 ,
			modal : true, 
			
		});
	});
});



function contactDet(obj , pPhone,email,pGender)
{
	textElement = $(obj).text();
	console.log(textElement);	
	userPhone = pPhone;
	Email = email;
	gender = pGender;
	setName();
}

function deletePreson()
{
	var ArrayOfElement = JSON.parse(localStorage.getItem('contacts'));
	for (var counter = 0 ; counter < retreivedArray.length ;counter++)
	{
		var pNameValue  = retreivedArray[counter].name;
		var pPhoneValue = retreivedArray[counter].phone;
		
		if (pNameValue == textElement && pPhoneValue == userPhone)
		{
			ArrayOfElement.splice(counter , 1);
			
			localStorage.setItem('contacts', JSON.stringify(ArrayOfElement));
		}                  
		
		
	}
	
        parent.history.back();
      
	$('#contactList li:contains(textElement)').remove();
	$("#dialog").hide();
	
	
	
}
function stopDeleting()
{
	  $("#dialog").hide();
}





/* Mohamed */

function addNewUser(){
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    console.log(contacts.length)
    var userName = $("#name").val();
    var phoneNum = $("#phone").val();
    var email = $("#email").val();
    var gender = $("#gender").val();

   // var person = new Person(userName,phoneNum,email,gender);

    var person = {
        'name' : userName,
        'phone' : phoneNum,
        'email' : "'"+ email+"'",
        'gender' : "'"+gender+"'"
    };

    contacts.push(person);
    localStorage.setItem('contacts',JSON.stringify(contacts));
}

$(document).on('pagebeforeshow','#AddNewContactPage', function(e,data){
	textElement = data.prevPage.find('#name').val();
});

function editUser(){
	$("#name").val(textElement);
	$("#phone").val(userPhone);
	$("#email").val(Email);
	$("#gender").val(gender);
}

function removeQoutation(name){
	var newName = name.replace(/'/g,"");
	return newName;
}

$("#submit").click(addNewUser);
$('#editBtn').click(editUser);



