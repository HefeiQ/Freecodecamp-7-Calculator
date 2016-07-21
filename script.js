$(document).ready(function() {
 var input = '';
 
 $("button").click(function(){
  var text = $(this).text();
  switch(text) {
   case "AC": input = ""; break;
   case "CE": input = input.slice(0,input.length - 1);break;
   case "Ans":break;
   case "=": input = eval(input); break;   
   default: input += text;
  }
  $("#opScreen").text(input);
 });

});


