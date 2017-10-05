//menu dropdown
$(document).ready(function() {
	$('.dropdown').on("click",function(){
			$(this).siblings().find('ul').slideUp(300);
			$(this).children('ul').stop(true, false, true).fadeToggle(400);
		});
});
//END OF MENU DROPDOWN

//MENU ICON
$('li.dropdown a').click(function(){
    var icon = $(this).find('i');
    if(icon.hasClass('fa-angle-double-down')){
          $('li.dropdown i').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
          icon.addClass('fa-angle-double-up').removeClass('fa-angle-double-down');
}
else {
        icon.addClass('fa-angle-double-down').removeClass('fa-angle-double-up');
}
});
//END OF MENU ICON

