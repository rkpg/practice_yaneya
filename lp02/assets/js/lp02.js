// JavaScript Document

$(function(){
$('.accordion_q').click(function(){
  $(this).next().slideToggle(300); 
  $(this).toggleClass('arrow');
});
});