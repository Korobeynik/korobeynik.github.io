$(function() {

	//Owl carousel
  $(".carousel").owlCarousel({
  	loop:true,
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        520:{
            items:1,
        },
         560:{
            items:2,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        },
         1200:{
            items:4,
        }
    }
  });


	//Выравнивание элемента
	$(".s-direct .item-standart p").equalHeights();
	$(".s-provision .carousel-item p").equalHeights();

	$(".portfolio-item").each(function(e){

		var th = $(this);

		th.attr("href", "#portfolio-img-" + e)
			.find(".portfolio-popup")
				.attr("id", "portfolio-img-" + e);

	});

	$(".portfolio-item").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline'
	});

	/*
 * Replace all SVG images with inline SVG
 */
$('img.img-svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

	});





	//Galerry
	$(".mp-gallery").each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			gallery:{
				enabled: true,
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function() {
					this.items[0].src = this.items[0].src + '?=' + Math.random();
				},
				open: function() {
					$.magnificPopup.instance.next = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
					}
					$.magnificPopup.instance.prev = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
					}
				},
				imageLoadComplete: function() {
					var self = this;
					setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
				}
			}
		});
	});


$(".mouse-icon").click(function(){
	$("html, body").animate({
		scrollTop : $(".s-advantages").offset().top
	}, 700)
});

//jQuery Number Animation with Blur
	$(".s-advantages").waypoint(function() {
		$({blurRadius: 5}).animate({blurRadius: 0}, {
	duration: 1200,
	easing: 'swing',
	step: function() {
		$(".adv-item span").css({
			"-webkit-filter": "blur("+this.blurRadius+"px)",
			"filter": "blur("+this.blurRadius+"px)"
		});
	}
});
	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
	$(".adv-item span").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			"font-size": "1.875em",
			numberStep: comma_separator_number_step},
			1200);
	});

		this.destroy();
	}, {
		offset: '70%'
	});





$(".mouse-icon").click(function(){
	$("html, body").animate({
		scrollTop : $(".s-advantages").offset().top
	}, 700)
});

// Mobile menu
		$(".toggle-mnu").click(function() {
	  $(this).toggleClass("on");
	  $(".main-menu").slideToggle();
	  return false;
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

});
