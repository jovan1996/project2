$(document).ready(function(){
setInterval(function() {
		$('.teretanaslider img:first')
		.slideUp(function() {
			$(this).appendTo($('.teretanaslider')).slideDown(2000);
		});
	}, 4000);});

$(document).ready(function(){
setInterval(function() {
		$('.crosfitslider img:first')
		.fadeIn(function() {
			$(this).appendTo($('.crosfitslider')).fadeOut(3000);
		});
	}, 4000);});