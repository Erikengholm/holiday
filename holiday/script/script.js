   function valuta() {
       var myQuotes = new Array();
       myQuotes[0] = "1 euro = 11 sek";
       myQuotes[1] = "1 euro = 0.89 £";
       myQuotes[2] = "1 euro = 1.1 $";
       myQuotes[3] = "1 euro = 4.17 rl";


       var myRandom = Math.floor(Math.random() * myQuotes.length);

       $('#valuta')
           .html(myQuotes[myRandom]);
   }