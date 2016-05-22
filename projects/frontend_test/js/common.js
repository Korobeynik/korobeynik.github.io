$(function() {

	$('#myModal').on('show.bs.modal', function (e) {
	  if (!data) return e.preventDefault() // stops modal from being shown
	});


	$('h2').equalHeights();
	$('span').equalHeights();
	$('p').equalHeights();


	jQuery(function($){
	     $("#phone").mask("(999) 999-99-99");

	});



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


