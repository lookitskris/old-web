$(document).ready(function(){
	$('nav ul li a').live('click', function(){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 2000);
		return false;
	});
	
});
