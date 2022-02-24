$(function() {
  // Owl Carousel
  var owl = $(".two");
  owl.owlCarousel({
    items: 6,
    margin: 10,
    loop: true,
    nav: true
  });
});

$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    nav: true
  });
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.navbar').addClass('color-change');
  } else {
    $('.navbar').removeClass('color-change');
  }
});

document.getElementById("open").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "none";
})

$('.delete1').click(function(){
  $('.d1').fadeToggle(100);
})
$('.delete2').click(function(){
  $('.d2').fadeToggle(100);
})
$('.delete3').click(function(){
  $('.d3').fadeToggle(100);
})
$('.delete4').click(function(){
  $('.d4').fadeToggle(100);
})
