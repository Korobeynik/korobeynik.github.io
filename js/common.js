$(function() {

	$(".ninja-btn").click( function() {
	  $(this).toggleClass("active");
	  $(".mobile-menu").slideToggle();
	});


	var headerH = $("#js-header").height(),
				navH = $("#js-nav-container").innerHeight();

		$(document).on("scroll", function() {

				var documentScroll = $(this).scrollTop();

				if(documentScroll > headerH) {
						$("#js-nav-container").addClass("fixed");

						$("#js-header").css({
								"paddingTop": navH
						});
				} else {
						$("#js-nav-container").removeClass("fixed");
						$("#js-header").removeAttr("style");
				}

		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100){
			$('.top-line').addClass("fixed");
			$('header').addClass("top");
			}
			else{
			$('.top-line').removeClass("fixed");
			$('header').removeClass("top");
			}
		});

	 function scrollAnimate(){
		$('.main-nav ul a, .mobile-menu a').click(function(){
			elementClick = $(this).attr("href");
			destination = $(elementClick).offset().top;
			$('html:not(:animated),body:not(:animated)').animate({
				scrollTop: destination - 5
			}, 800, "swing");
			return false;
		});
	};

	 scrollAnimate();



	$(".slider").owlCarousel({
		loop:true,
		nav:true,
		navText : ['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
		smartSpeed: 700,
		items:1,
		nav:true,
		responsiveClass: true	
	});


	$(".buy-btn").hover( function(){
		$(this).closest('.tarif-plan').find('.tarif-name').addClass('active');
	}, function() {
		$(this).closest('.tarif-plan').find('.tarif-name').removeClass('active');
		console.log("hover-off");
	})

	$('#form').validate({
	 rules: {
		 email: {
				required: true,
				email: true
		 },
		 name: {
				required: true,
				name: true
		 },
		 password: {
				required: true,
				rangelength:[8,16]
		 },
		 confirm_password: {equalTo:'#password'},
		 spam: "required"
	 }, //end rules
	 messages: {
			email: {
				 required: "Fill in the field",
				 email: "This is an incorrect email address."
			 },

			 name: {
				 required: "Fill in the field"
			 },

	 }


	}); // end validate 

});
