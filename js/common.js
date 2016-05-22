$(function() {



  $(".overlay-menu li a").mPageScroll2id();

	$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

  $('.overlay-menu li a').click(function() {
   $('#overlay').toggleClass('open');
   $('#toggle').toggleClass('active');
  });

  //Анимация

  $("h1").animated("fadeInDown", "fadeOutDown");
  $(".header-title p").animated("fadeInDown", "fadeOutDown");
  $(".btn-wrap").animated("fadeInUp", "fadeOutDown");
  $(".section-header,.work-header").animated("fadeInUp", "fadeOutDown");
  $(".services-item").animated("fadeInUp", "fadeOutDown");

  $(".foto-wrap").animated("zoomIn", "fadeOutDown");
  $(".description, button-download").animated("fadeInLeft", "fadeOutLeft");
  $(".foto-wrap .foto").animated("fadeInRight", "fadeOutRight");
  $(".hobby").animated("fadeInUp", "fadeOutDown");
  $(".work-header-descr, .descr").animated("fadeInLeft", "fadeOutLeft");
  $(".input").animated("fadeInLeft", "fadeOutLeft");
  $(".textarea").animated("fadeInUp", "fadeOutDown");

  $(".item-descr").animated("zoomIn", "fadeOutDown");

//Portfolio sorting

$('#portfolio-grid').mixItUp();

$(".portfolio li").click(function() {
  $(".portfolio li").removeClass("active");
  $(this).addClass("active");
});



//Popup window

  $(".popup").magnificPopup({type:"image"});
  $(".popup-content").magnificPopup({type:"inline", midClick: true});



//Анимация-поворот для карточек
	$(".services").waypoint(function() {

		$(".services .services-item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("icon-on").addClass("icon-off");
			}, 100*index);

		});
	}, {
		offset : "15%"
	});

//Scroll arrow
   $("#btn-scroll").click(function(){
   		$("html, body").animate({ scrollTop: $(".header").height() + 50 }, "slow");
   });



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
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

  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


