var textElement;
var retreivedArray;
var userPhone;
function getContact ()
{		
	retreivedArray = JSON.parse(localStorage.getItem('contacts'));		
	for (var counter = 0 ; counter < retreivedArray.length ;counter++)
	{
		
		console.log(retreivedArray[counter].name);
		var pName  = retreivedArray[counter].name;
		var pPhone = retreivedArray[counter].phone;
		var pGender = retreivedArray[counter].gender;
		
		if (pGender=="female")
		{
			$("ul").append('<li onclick="contactDet(this ,'+pPhone+')"><a href="#thirdPage" data-transition="flip"><img src="images/user-female.png" width="50" height="50">'+pName+'<a href="tel:'+pPhone+'" data-role="button" date-icon="phone"></a></a></li>');
		}                  
		else 
		{
			$("ul").append('<li onclick="contactDet(this,'+pPhone+')"><a href="#thirdPage" data-transition="flip"><img src="images/user-male.png" width="50" height="50">'+pName+'<a href="tel:'+pPhone+'" data-role="button"  date-icon="phone"></a></a></li>');

		}
		
	}
}

window.onload = getContact;
	

function name()
{
	
	document.getElementById("contactName").innerHTML= textElement;
		
}



$(function(){
	$("#buttonId").click(function(){
		$("#dialog").dialog({
			title:"Delete Step",
			backgroundColor: "purple",
			width:430 ,
			height :200 ,
			modal : true, 
			
		});
	});
});


/*$('#deletebutton').click(function() 
{
    $("#dialog").dialog();
	/*.animate({
            backgroundColor: "purple",
            color: "white",
            width: 500
			, modal: true,
            close: function(event) {
                $("#dialog").hide();
                }
            });
       
});*/

function contactDet(obj , pPhone)
{
	textElement = $(obj).text();	
	userPhone = pPhone;
	//console.log(userPhone+"");
    name();
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
	
	$('#contactList li:contains(textElement)').remove();
	$("#dialog").hide();
	
}
function stopDeleting()
{
	  $("#dialog").hide();
}









