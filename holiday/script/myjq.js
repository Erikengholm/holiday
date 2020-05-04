$(document).ready(function(){
  $("#b1").click(function(){
    $("#info-box-2").fadeOut();
    $("#info-box-3").fadeOut();
    $("#b1").hide();
    $("#b2").show();
    $("#info-box-1").height("+=660"); 
    $("#info-box-1").css({"overflow":"scroll"});
    $("#info-box-1").css({"border-right":"0px"});
    $("#info-box-1").css({"border-bottom":"0px"});




  });
  $("#b2").click(function(){
    $("#b2").hide();
    $("#info-box-2").fadeIn();
    $("#info-box-3").fadeIn();
    $("#b1").show();
    $("#info-box-1").height("-=660");
    $("#info-box-1").css({"overflow":"hidden"}); 
    $("#info-box-1").css({"border":"1px solid black"});







  });
  $("#b3").click(function(){
    $("#info-box-1").fadeOut();
    $("#info-box-3").fadeOut();
    $("#b3").hide();
    $("#b4").show();
    $("#info-box-2").height("+=660");
    $("#info-box-2").css({"overflow":"scroll"});
    $("#info-box-2").css({"border-right":"0px"});
    $("#info-box-2").css({"border-bottom":"0px"});


  });
  $("#b4").click(function(){
    $("#b4").hide();
    $("#info-box-1").fadeIn();
    $("#info-box-3").fadeIn();
    $("#b3").show();
    $("#info-box-2").height("-=660");
    $("#info-box-2").css({"overflow":"hidden"}); 
    $("#info-box-2").css({"border":"1px solid black"});



  });
$("#b5").click(function(){
    $("#info-box-1").fadeOut();
    $("#info-box-2").fadeOut();
    $("#b5").hide();
    $("#b6").show();
    $("#info-box-3").height("+=660");
    $("#info-box-3").css({"overflow":"scroll"});
    $("#info-box-3").css({"border-right":"0px"});
    $("#info-box-3").css({"border-bottom":"0px"});




  });
  $("#b6").click(function(){
    $("#b6").hide();
    $("#info-box-2").fadeIn();
    $("#info-box-1").fadeIn();
    $("#b5").show();
    $("#info-box-3").height("-=660");
    $("#info-box-3").css({"overflow":"hidden"}); 
    $("#info-box-3").css({"border":"1px solid black"});


  });
   $("#Weather-Button-mandag").click(function(){
    $("#Weather-Button-mandag").css("background","inherit");
    $("#Weather-Button-tisdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-onsdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-torsdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-fredag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-lordag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-sondag").css("background","rgba(255,255,255, 0.9)");

    $("#weather-text").fadeOut(800,function() {
     setTimeout(function() {
     	;$("#weather-text").text('23℃').fadeIn(800);;
     }, 300);
});
   
     $("#weather-img").fadeOut(800,function() {
     setTimeout(function() {
        $("#weather-img").attr("src", "././img/sun.png").fadeIn(800);
     }, 300);

});


});
   $("#Weather-Button-tisdag").click(function(){
    $("#Weather-Button-tisdag").css("background","inherit");
    $("#Weather-Button-mandag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-onsdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-torsdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-fredag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-lordag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-sondag").css("background","rgba(255,255,255, 0.9)");

    $("#weather-text").fadeOut(800,function() {
     setTimeout(function() {
     	;$("#weather-text").text('20℃').fadeIn(800);;
     }, 300);
});
   
     $("#weather-img").fadeOut(800,function() {
     setTimeout(function() {
        $("#weather-img").attr("src", "././img/rain.png").fadeIn(800);
     }, 300);

});

}) ;

      $("#Weather-Button-onsdag").click(function(){
    $("#Weather-Button-onsdag").css("background","inherit");
    $("#Weather-Button-mandag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-tisdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-torsdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-fredag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-lordag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-sondag").css("background","rgba(255,255,255, 0.9)");

    $("#weather-text").fadeOut(800,function() {
     setTimeout(function() {
     	;$("#weather-text").text('25℃').fadeIn(800);;
     }, 300);
});
   
     $("#weather-img").fadeOut(800,function() {
     setTimeout(function() {
        $("#weather-img").attr("src", "././img/cloud.png").fadeIn(800);
     }, 300);

});

});
         $("#Weather-Button-torsdag").click(function(){
    $("#Weather-Button-torsdag").css("background","inherit");
    $("#Weather-Button-mandag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-onsdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-tisdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-fredag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-lordag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-sondag").css("background","rgba(255,255,255, 0.9)");

    $("#weather-text").fadeOut(800,function() {
     setTimeout(function() {
     	;$("#weather-text").text('14℃').fadeIn(800);;
     }, 300);
});
   
     $("#weather-img").fadeOut(800,function() {
     setTimeout(function() {
        $("#weather-img").attr("src", "././img/rain.png").fadeIn(800);
     }, 300);

});

}) ;
            $("#Weather-Button-fredag").click(function(){
    $("#Weather-Button-fredag").css("background","inherit");
    $("#Weather-Button-mandag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-onsdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-torsdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-tisdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-lordag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-sondag").css("background","rgba(255,255,255, 0.9)");

    $("#weather-text").fadeOut(800,function() {
     setTimeout(function() {
     	;$("#weather-text").text('27℃').fadeIn(800);;
     }, 300);
});
   
     $("#weather-img").fadeOut(800,function() {
     setTimeout(function() {
        $("#weather-img").attr("src", "././img/sun.png").fadeIn(800);
     }, 300);

});

}) ;
               $("#Weather-Button-lordag").click(function(){
    $("#Weather-Button-lordag").css("background","inherit");
    $("#Weather-Button-mandag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-onsdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-torsdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-fredag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-tisdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-sondag").css("background","rgba(255,255,255, 0.9)");

    $("#weather-text").fadeOut(800,function() {
     setTimeout(function() {
     	;$("#weather-text").text('15℃').fadeIn(800);;
     }, 300);
});
   
     $("#weather-img").fadeOut(800,function() {
     setTimeout(function() {
        $("#weather-img").attr("src", "././img/rain.png").fadeIn(800);
     }, 300);

});

}) ;
       $("#Weather-Button-sondag").click(function(){
    $("#Weather-Button-sondag").css("background","inherit");
    $("#Weather-Button-mandag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-onsdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-torsdag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-fredag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-lordag").css("background","rgba(255,255,255, 0.9)");
    $("#Weather-Button-tisdag").css("background","rgba(255,255,255, 0.9)");

    $("#weather-text").fadeOut(800,function() {
     setTimeout(function() {
     	;$("#weather-text").text('22℃').fadeIn(800);;
     }, 300);
});
   
     $("#weather-img").fadeOut(800,function() {
     setTimeout(function() {
        $("#weather-img").attr("src", "././img/cloud.png").fadeIn(800);
     }, 300);

});

}) ;

});
jQuery(document).ready(function() {
  




  var btn = $('#b5');

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:150}, '300');
  });
  var btn = $('#b3');

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:150}, '300');
  });

});

 
