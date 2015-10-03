$(function() {
	/* Navbar */
	$(window).on("scroll", function(){
		var height = $(".header-section").height();
		if($(this).scrollTop() > 0) {
			$(".navbar-default").css({"background-color":"rgba(14,180,147,1)"}).addClass("navbar-boxshadow");
		} else {
			$(".navbar-default").css("background-color","rgba(16,22,54,.2)").removeClass("navbar-boxshadow");
		}
	});

	/* Isotope */
	var $grid = $('.grid').isotope({
		itemSelector: '.element-item',
		layoutMode: 'fitRows'
	});
	var $container = $(".works-sub-section");
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$container.isotope({ filter: filterValue });
	});

	$(".filter-button-group button").on("click", function(){
		$(".filter-button-group button").removeClass("active");
		$(this).addClass("active");
	});

	$("img.lazy").lazyload();
});