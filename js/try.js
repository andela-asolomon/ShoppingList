$(document).ready(function() {
    //assigning the click event to the buttom
    $('#submit').click(function(){

        var listItem = $('#type');
        $('#list ul').append('<li>' + listItem.val() + "   X   " + '</li>');
        listItem.val('').focus();

    });


    $('#list ul li').on("click", "li:contains(X)", function () {

        $('this').remove();
    });


    	$('#list').on('change','input[type=checkbox]',function(){
    	var myInput = $(this).parent().siblings('ul li');
    	if ($(this).is(':checked')) {
    		// $(myInput).css('textDecoration','line-through');
    		$(myInput).appendTo("#buy");
    	}
    	else{
    		$(myInput).css('textDecoration','none');
    	}
});



});