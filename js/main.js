$('.hide').hide();
$('.rllink').hide();


$(document).ready(function() {
	$('#readmore1').click(function(event) {
		$('#show-on-click1').slideDown();
		$('#readmore1').hide();
    	$('#readless1').show();
    	event.preventDefault();
	})
	$('#readless1').click(function(event){
	    $('#show-on-click1').slideUp();
	    $('#readless1').hide();
	    $('#readmore1').show();
	    event.preventDefault();
	});
	$('#readmore2').click(function(event) {
		$('#show-on-click2').slideDown();
		$('#readmore2').hide();
    	$('#readless2').show();
    	event.preventDefault();
	})
	$('#readless2').click(function(event){
	    $('#show-on-click2').slideUp();
	    $('#readless2').hide();
	    $('#readmore2').show();
	    event.preventDefault();
	});
	$('#learnmore').click(function(event){
		$('#aboutmore').slideDown();
		$('#learnmore').hide();
		event.preventDefault();
	});
});



