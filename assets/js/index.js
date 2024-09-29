// JavaScript Document

//hamburger 
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});
$("#g-nav a").click(function () {
    $(".openbtn1").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});

//Q&A
$('.accordion-header').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('active');
});