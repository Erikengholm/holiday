   function getMoreInfo(s) {
     document.getElementById(s).style.height ="990px";
     if(s=="i1"){
     document.getElementById("i2").style.display= "none";
     document.getElementById("i3").style.display= "none";
     document.getElementById("b1").style.display= "none";
     document.getElementById("b2").style.display= "inline-block";
   }
     if(s=="i2"){
     	document.getElementById("i2").style.top= "top:105%";
     	document.getElementById("i1").style.display= "none";
    	document.getElementById("i3").style.display= "none";
        document.getElementById("b3").style.display= "none";
        document.getElementById("b4").style.display= "inline-block";
     }
     if(s=="i3"){
     	document.getElementById("i3").style.top= "top:105%";
     	document.getElementById("i1").style.display= "none";
    	document.getElementById("i2").style.display= "none";
        document.getElementById("b5").style.display= "none";
        document.getElementById("b6").style.display= "inline-block";
     }

   
   
   
     
   }
   function lessinfo(s){
     document.getElementById(s).style.height ="330px";
     document.getElementById("i1").style.display= "flex";
     document.getElementById("i2").style.display= "flex";
     document.getElementById("i3").style.display= "flex";
     document.getElementById("b1").style.display= "inline-block";
     document.getElementById("b3").style.display= "inline-block";
     document.getElementById("b5").style.display= "inline-block";
     document.getElementById("b2").style.display= "none";
     document.getElementById("b4").style.display= "none";
     document.getElementById("b6").style.display= "none";

    
   }