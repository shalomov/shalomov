// Toggle Search
$("#btn-search").click(function(e) {
  e.preventDefault();
  $(".form-group").toggleClass('hidden');
})

// Slider
$('.carousel').carousel({
	  interval: 3000
	})

// Carousel

	$('#carousel-instagram').elastislide({
		autoplay: true
	});

$('#form-validator').validator() 

