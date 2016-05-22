$(window).load(function() {
  $('.blueberry').blueberry();
  duration : 500

});

$(document).on("scroll",function(){
    if($(document).scrollTop()>150){
      $("header").removeClass("large").addClass("small");
      }
    else{
      $("header").removeClass("small").addClass("large");
      }
});

$(function(){

  $('h1').equalHeights();

});

//Mobile menu

$(document).ready(function(){

  $('.menu-trigger').click(function(){
      $('nav ul').slideToggle(500);
  });
  $(window).resize(function(){
      if($(window).width() > 500 ) {
        $('nav ul').removeAttr('style');
      }

  });

});

