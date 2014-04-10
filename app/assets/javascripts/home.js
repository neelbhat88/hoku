$(document).ready(function()
{
	$('.scroll-start').click(function(){
		var elem = this;

		var scrollTarget = $(elem).attr('scroll-target');
		var scrollTargetTop = $(scrollTarget).position().top;
		
		$("html, body").animate({ scrollTop: scrollTargetTop + "px" }, 700);
	});
});