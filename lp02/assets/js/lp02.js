// JavaScript Document

$(function () {
  $('.accordion_q').click(function () {
    $(this).next().slideToggle(300);
    $(this).toggleClass('arrow');
  });
});

function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $('#page-top').removeClass('DownMove');
    $('#page-top').addClass('UpMove');
  } else {
    if ($('#page-top').hasClass('UpMove')) {
      $('#page-top').removeClass('UpMove');
      $('#page-top').addClass('DownMove');
    }
  }
}


$(window).scroll(function () {
  PageTopAnime();
});


$(window).on('load', function () {
  PageTopAnime();
});

$('#page-top a').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 1000);
  return false;
});

$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});
