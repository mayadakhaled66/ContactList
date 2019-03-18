function getContact ()
{
	
	/*	var personDataArray = {
								personName:currentDate,
								personPhone: textNote,
								personGender: colorNote ,
								personEmail:index ,
								personImage:
							} ;*/
						
	for (var counter = 0 ; counter < localStorage.length ;counter++)
	{
		var retreivedArray = JSON.parse(localStorage.getItem(localStorage.key(counter)));
		
		var pName  = retreivedArray.personName;
		var pImage = retreivedArray.personImage;
		var pPhone = retreivedArray.personPhone;
		var pGender = retreivedArray.personGender;
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