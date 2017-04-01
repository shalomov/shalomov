$( document ).ready(function() {
	$('.carousel').carousel({
	  interval: 3000
	})
	$('.search').on('click',function(){
		$('.main-menu .navbar-form').slideToggle();
	});


	$('#carousel-instagram').elastislide({
		autoplay: true
	});
});

$(window).load(function(){
	var carouselCaptionWidth = $('#carousel-sidebar .active img').width();
	$('#carousel-sidebar img').each(function(){
		$(this).attr('width', carouselCaptionWidth);
	});
	$('#carousel-sidebar .sidebar-carousel-caption').css('max-width', carouselCaptionWidth + 'px');
	$('#carousel-sidebar .carousel-indicators').css('max-width', carouselCaptionWidth + 'px');
	$('.sidebar .banner').css('max-width', carouselCaptionWidth + 'px');
})