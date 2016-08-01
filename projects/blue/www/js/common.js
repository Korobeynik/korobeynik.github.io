$(function() {


	$(".ninja-btn").click( function() {
  	$(this).toggleClass("active");
  	$(".menu").slideToggle();
  	  $(window).resize(function(){
      if($(window).width() > 768 ) {
        $('nav ul').removeAttr('style');
      }
  	});
	});

	//Portfolio tabs
	function blueasyTabs() {
		var $wrapper = $('.tab-wrapper'),
				$menu = $wrapper.find('.tab-menu li'),
				$content = $wrapper.find('.thumbs__row');

		$content.not(':first-of-type').hide();
		$content.each(function(i) {
			$(this).attr('data-tab', 'tab-'+i);
		});
		$menu.each(function(i) {
			$(this).attr('data-tab', 'tab-'+i);
		});

		$menu.click(function(e) {
			e.preventDefault();
			var $getWrapper = $(this).closest($wrapper),
					dataTab = $(this).attr('data-tab');

			$getWrapper.find($menu).find('a').removeClass('active');
			$(this).find('a').addClass('active');

			$getWrapper.find($content).hide();
			$getWrapper.find($content).filter('[data-tab='+dataTab+']').show();
		});
	}
	blueasyTabs();






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

});
