$(document).ready(function(){
  $("#b1").click(function(){
    $("#info-box-2").fadeOut();
    $("#info-box-3").fadeOut();
    $("#b1").hide();
    $("#b2").show();
    $("#info-box-1").height("+=660"); 



  });
  $("#b2").click(function(){
    $("#b2").hide();
    $("#info-box-2").fadeIn();
    $("#info-box-3").fadeIn();
    $("#b1").show();
    $("#info-box-1").height("-=660");





  });
  $("#b3").click(function(){
    $("#info-box-1").fadeOut();
    $("#info-box-3").fadeOut();
    $("#b3").hide();
    $("#b4").show();
    $("#info-box-2").height("+=660");


  });
  $("#b4").click(function(){
    $("#b4").hide();
    $("#info-box-1").fadeIn();
    $("#info-box-3").fadeIn();
    $("#b3").show();
    $("#info-box-2").height("-=660");



  });
$("#b5").click(function(){
    $("#info-box-1").fadeOut();
    $("#info-box-2").fadeOut();
    $("#b5").hide();
    $("#b6").show();
    $("#info-box-3").height("+=660");




  });
  $("#b6").click(function(){
    $("#b6").hide();
    $("#info-box-2").fadeIn();
    $("#info-box-1").fadeIn();
    $("#b5").show();
    $("#info-box-3").height("-=660");



  });

});