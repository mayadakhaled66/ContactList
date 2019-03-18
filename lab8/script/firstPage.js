var textElement;
function getContact ()
{		
	var retreivedArray = JSON.parse(localStorage.getItem('contacts'));		
	for (var counter = 0 ; counter < retreivedArray.length ;counter++)
	{
		
		console.log(retreivedArray[counter].name);
		var pName  = retreivedArray[counter].name;
		var pPhone = retreivedArray[counter].phone;
		var pGender = retreivedArray[counter].gender;
		
		if (pGender=="female")
		{
			
			$("ul").append('<li><a href="#secondPage"><img src="images/user-female.png" width="50" height="50">'+pName+'<a href=tel:'+pPhone+' data-role="button" class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-phone"></a></a></li>');
		}
		else 
		{
			$("ul").append('<li><a href="#secondPage"><img src="images/user-male.png" width="50" height="50">'+pName+'<a href="tel:'+pPhone+' data-role="button" class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-phone"></a></a></li>');

		}
		
	}
}

window.onload = getContact;
	

function name()
{
	
	document.getElementById("contactName").innerHTML= textElement;
		
}

$("li").click(function() {
	textElement = $(this).text();	
    name();
});

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

 
function deletePreson()
{
	//localStorage.removeItem(localStorage.key(newid));
}
function stopDeleting()
{
	  $("#dialog"). hide();
}









