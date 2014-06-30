$(function () {

	$('#submit').click(function() {

		var list = $('#type');

		if ( list.val() === '' ) {
			alert("Please fill in your Items");
		} 

		else {

			var item = $('#list ul').append("<li><input type='checkbox'>" + 
				list.val() +  "<input type='submit' value='delete' id='remove'>"
				 + "</li>").show('slow');

			list.val('').focus();

			$('#list li').on('change','input[type=checkbox]',function(){
		    	var myInput = $(this).parent().show('slow');
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
