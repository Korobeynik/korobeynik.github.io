$(function() {

	$('.popup').magnificPopup();
	// $('.close-popup').click( function() {
	// 	magnificPopup.close(); 
	// });

	$('.close-popup').on('click',function(){                                                      
    $.magnificPopup.proto.close.call(this);
	}); 

	$('.header__top a[href^="#"]').click(function() {

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


/************************************* Shoping Cart ***************************************************/

$(document).ready(function() {

	// $('.popup').magnificPopup();

	$("input").click(function () {
  
	});


	// $("#checkout").click(function(event) {
	//    if (totalTax() >= 100){
	//     prompt("Would you like to pay with Cash or Credit?");
	//   }else {
	//     alert("Cash Only.");
	//   }
	// });

	$("#clear-cart").click(function(event){
	  clearCart();
	  displayCart();
	});

	$(".add-to-cart").click(function(event) {
	  event.preventDefault();
	  var name = $(this).attr("data-name");
	  var price = Number($(this).attr("data-price"));
	  addItemToCart(name, price, 1);
	  displayCart();
	});

	$("#show-cart").on("click", ".delete-item", function(event) {
	  var name = $(this).attr("data-name");
	  removeItemFromCartAll(name);
	  displayCart();
	});

	$("#show-cart").on("click", ".subtract-item", function(event) {
	  var name = $(this).attr("data-name");
	  removeItemFromCart(name);
	  displayCart();
	});

	$("#show-cart").on("click", ".plus-item", function(event) {
	  var name = $(this).attr("data-name");
	  addItemToCart(name, 0, 1);
	  displayCart();
	});

	//***********************
	//shopping cart functions
	/*function cashOrCredit() {
	  if (totalTax() >= 100){
	    prompt("Would you like to pay with Cash or Credit?");
	  }else {
	    alert("Cash Only.");
	  }
	};*/

	var cart = [];
	var Item = function(name, price, count) {
	  this.name = name
	  this.price = price
	  this.count = count
	};

	function displayCart() {
	  console.log("***displayCart***");
	  var cartArray = listCart();
	  console.log("countCart "+cartArray.length);
	  var output = "";
	  for (var i in cartArray) {
	    output += "<li>" 
	    	+"<div class='name-product'>"
	      + cartArray[i].name + " " 
	      +"</div>"
	      +"<div class='cart-content'>"
	      +"<div class='count-wrap'>"
	      +" <button class='subtract-item' data-name='"
	      +cartArray[i].name+"'>-</button>"
	      +"<span>"
	      + cartArray[i].count 
	      +"</span>"
	      +" <button class='plus-item' data-name='"
	      +cartArray[i].name+"'>+</button>"
	      +"</div>"
	      +"<div class='price'>"
	      + cartArray[i].price +"P"
	      +"</div>"
	      +"<div class='total-price'>" 
	      + cartArray[i].total +"P"
	      +"</div>" 
	      +" <button class='delete-item' data-name='"
	      +cartArray[i].name+"'></button>"
	      +"</div>"
	      + "</li>"
	  }
	  $("#show-cart").html(output);
	  $("#count-cart").html(countCart());
	  $("#sub-total").html(totalCart());
	  $("#total").html(totalTax());
	};

	function addItemToCart(name, price, count) {
	  var item = new Item(name, price, count);
	  for (var i in cart) {
	    if (cart[i].name === name) {
	      cart[i].count += count;
	      return;
	    }
	  }
	  cart.push(item);
	  saveCart();
	};

	function removeItemFromCart(name) { 
	  for (var i in cart) {
	    if (cart[i].name === name) {
	      cart[i].count--; 
	      if (cart[i].count === 0) {
	        cart.splice(i, 1);
	      }
	      break;
	    }
	  }
	  saveCart();
	};

	function removeItemFromCartAll(name) {
	  for (var i in cart) {
	    if (cart[i].name === name) {
	      cart.splice(i, 1)
	      break;
	    }
	  }
	  saveCart();
	};

	function clearCart() {
	  cart = [];
	  saveCart();
	};

	function countCart() { 
	  var totalCount = 0;
	  for (var i in cart) {
	    totalCount += cart[i].count;
	    if (totalCount == 2) {
	    	$('#count-text').html('Подарочных набора');
	    } 
	    else if (totalCount >= 5) {
	    	$('#count-text').html('Подарочных наборов');
	    }
	    else {
	    	$('#count-text').html('Подарочный набор');
	    }
	  }
	  return totalCount;
	};

	function totalCart() { 
	  var totalCost = 0;
	  for (var i in cart) {
	    totalCost += cart[i].price * cart[i].count;
	  }
	  return totalCost.toFixed(2);
	};

	function totalTax() { 
	  var totalTax = 0;
	  for (var i in cart) {
	    totalTax += (cart[i].price * cart[i].count)*1.075;
	  }
	  return totalTax.toFixed(2);
	};

	function listCart() { 
	  var cartCopy = [];
	  for (var i in cart) {
	    var item = cart[i];
	    var itemCopy = {}
	    for (var p in item) {
	      itemCopy[p] = item[p];
	    }
	    itemCopy.total = (item.price * item.count).toFixed(2);
	    cartCopy.push(itemCopy);
	  }
	  return cartCopy;
	};

	function saveCart() {
	  localStorage.setItem("shoppingCart", JSON.stringify(cart));
	};

	function loadCart() {
	  cart = JSON.parse(localStorage.getItem("shoppingCart"));
	};
});


