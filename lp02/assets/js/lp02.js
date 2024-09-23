// JavaScript Document

//よくある質問
$('.accordion_q').on('click', function() {
	var findElm = $(this).next(".accordion-a_wrapper_none");
	$(findElm).slideToggle();
    
	if($(this).hasClass('close')){
		$(this).removeClass('close');
	}else{
		$(this).addClass('close');
	}
});

//トップページに戻る
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

$('#page-top').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 1000);
  return false;
});


//オープンボタン
$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});
