// This is the ready function for the Application
$(function () {

	// The submit(Add) botton starts here
	$('#submit').click(function() {

		var list = $('#type');

		if ( list.val() === '' ) {
			alert("Please fill in your Items");
		} 

		else {

			// adding the user input to the list
			$('#list ul').append("<li><input type='checkbox'>" + 
				list.val() +  "<input type='submit' value='delete' id='remove'>"
				 	+ "</li>");

			list.val('').focus();

			// adding the items to the choosen item after being 
			$('#list li').on('change','input[type=checkbox]',function(){
		    	var myInput = $(this).parent();
		    	if ($(this).is(':checked')) {
		    		 $(myInput).appendTo("#buy");
		    	}
		    	else {
		    		$(myInput).appendTo("#list");
		    	}
			});
		}

	$('#list, #buy').on('click', '#remove', function(){
	 	var del = $(this).parent();
	 	$(del).hide('slow');
	 });

	});

    $("#type").keyup(function(event){
    	if(event.keyCode == 13){
        	$("#submit").click();
    	}
	});

});
