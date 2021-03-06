onResize = function() {
    if($(window).width() < 1000) {
        var owl = $('.principles-slider');
			    owl.owlCarousel({
			        items:1,
			        loop:true,
			        margin: 30,
			        smartSpeed: 500,
			        nav: true
			    });
    }
}

$(document).ready(onResize);
$(window).resize(onResize);


$(function() {

	// $(".content-tittle").animated("flipInY", "fadeOutDown");

	//$(".scroll-to, .icon").mPageScroll2id();

	$('.scroll-to').bind('click', function(event) {
      var $anchor = $(this);
      $('.st-pusher').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 0)
      }, 1250, 'easeInOutCubic');
      event.preventDefault();
  });

// $('.scroll-to, .icon').on('click', function (el) {
//   el.preventDefault();

//   $('html, body').animate({
//     scrollTop: $($(this).attr('href')).offset().top
//   }, 500, 'linear');
// });
//   $('html, body').animate({
//     scrollTop: ($('#element').offset().top)
// },500);

  $('.st-menu .icon').click(function(e) {
  	// e.preventDefault();
  	// let $anchor = $(this);
  	// $('.menu-button').trigger('click');

		// setTimeout(function() {
		// 	$('.st-pusher').stop().animate({
  //         scrollTop: ($($anchor.attr('href')).offset().top)
  //     }, 1500, 'easeInOutCubic');
		// },1000);		

		// setTimeout(function() {
		// 	$('.st-pusher').animate({
		// 		scrollTop: $($($anchor).attr('href')).offset().top
		// 	}, 1000, 'linear');
		// },1000);		

      // var $anchor = $(this);
      // $('.st-content-inner').stop().animate({
      //     scrollTop: ($($anchor.attr('href')).offset().top - 0)
      // }, 1250, 'easeInOutCubic');
      // event.preventDefault();
  });

// let elem = $('#rev-1').offset().top.toFixed();

// let a = parseInt(elem);

// $('.st-pusher').scroll(function(){
// console.log(a)

// 	let b = ($(this).scrollTop());

// 	console.log(b)

// 	if( $(this).scrollTop() === a ) {
// 		alert("aSome")
// 	}
// })


// $(window).scroll(function () {

// 	console.log($('.st-pusher').scrollTop());

//   // if ($(this).scrollTop() > 100) {
//   //   // бла-бла-бла
//   // } else {
//   //   // бла-бла-бла
//   // }
// });

	$('.menu-button').click(function() {
		//console.log($(this).scrollTop(1000));
		//$('.st-container').addClass('fixed').scrollTop(1000);
		$(this).toggleClass('open');
		$('.st-menu').toggleClass('active');
		$(this).children('div').toggleClass('active');
		$("#st-container").toggleClass('st-menu-open');
		$(".st-container").addClass('open');
		$(".st-pusher").addClass('open');

		if(!$(this).hasClass('open')) {
			$(this).removeClass('open');
			setTimeout(function() {
				$('.st-container').addClass('fixed');
				$(".st-pusher").removeClass('open');
				// $('html, body, .st-container').removeClass('active');
			},1000);
		} else {
			$(this).addClass('open');
		}
	});

	$('#play').click(function() {
		$(this).css('display', 'none');
		$('video').attr('controls',true);
		$('video').trigger('play');
	});


});



/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


/* Sidebar Effects */

//  let SidebarMenuEffects = (function() {

//  	function hasParentClass( e, classname ) {
// 		if(e === document) return false;
// 		if( classie.has( e, classname ) ) {
// 			return true;
// 		}
// 		return e.parentNode && hasParentClass( e.parentNode, classname );
// 	}

// 	function mobilecheck() {
// 		var check = false;
// 		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
// 		return check;
// 	}

// 	function init() {

// 		var container = document.getElementById( 'st-container' ),
// 			buttons = Array.prototype.slice.call( document.querySelectorAll( '#st-trigger-effects .menu-button' ) ),
// 			// event type (if mobile use touch events)
// 			eventtype = mobilecheck() ? 'touchstart' : 'click',
// 			resetMenu = function() {
// 				classie.remove( container, 'st-menu-open' );
// 			},
// 			bodyClickFn = function(evt) {
// 				if( !hasParentClass( evt.target, 'st-menu' ) ) {
// 					resetMenu();
// 					document.removeEventListener( eventtype, bodyClickFn );
// 				}
// 			};

// 		buttons.forEach( function( el, i ) {
// 			var effect = el.getAttribute( 'data-effect' );

// 			el.addEventListener( eventtype, function( ev ) {
// 				ev.stopPropagation();
// 				ev.preventDefault();
// 				container.className = 'st-container'; // clear
// 				classie.add( container, effect );
// 				setTimeout( function() {
// 					classie.add( container, 'st-menu-open' );
// 				}, 25 );
// 				document.addEventListener( eventtype, bodyClickFn );
// 			});
// 		} );

// 	}

// 	init();

// })();
