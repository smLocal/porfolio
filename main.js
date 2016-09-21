$(document).ready(function(){
 });

  $('#name').hover(function() {
    $main_text=$(this).text();
    $(this).text("Welcome to my Website").fadeIn();
  }, function() {
    $(this).text($main_text);

  });

  // $('nav a').click(function () {
  //  var $href = $(this).attr('href');
  //  $('body').stop().animate({
  //    scrollTop: $($href).offset().top
  //  }, 1000);
  //  return false;
  // });

var page = $("html, body");

$( "section" ).click(function(e) {

   page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
       page.stop();
   });

   page.animate({ scrollTop: $(this).position().top }, 'slow', function(){
       page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
   });

   return false;
});

console.log("testing");
