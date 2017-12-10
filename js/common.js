$(function() {

	$('a[href^="#"]').click(function() {

		$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);

		return false;

		e.preventDefault();

	});

	//Slider
	$('.slider').slick({
	centerMode: false,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
				

  check();
	function check() {

		$(window).load( function(){
			if ($('.flter__item input').is(":checked")) {
					$(this).next('label').addClass('active');
				}
		});

		$('.flter__item input').click( function(){
			if ($(this).is(":checked")) {
				$('.flter__item label').removeClass('active');
				$(this).next('label').addClass('active');
			} else {
				$('label').removeClass('active');
			}
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

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	check();
	function check() {
		if ($('.flter__item input').is(":checked")) {
				$(this).next('label').addClass('active');
			}
	};

});
