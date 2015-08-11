'use strict'

var position = 1;
function enter_task () {
        var text = $('#enter_task').val();
        $('#listItems').append('<li><span><div>'+ text + '</div></span><input type="submit" class="edit" id="edit' + position + '" value="Edit">' + '<input type="submit" class="delete" id="delete' + position + '" value="Delete">' +'</li>');
        $(this).focus();
        $('#enter_task').val('');
  
	$('#edit' + position).click(function(){
    	$(this).prev().attr('contenteditable','true');
    	$(this).prev().focus();
	});

	$('#delete' + position).click(function(){
    	$(this).parent().remove();
	});

  	position++;
};

$(function() {
    $('#add').on('click', enter_task);
});