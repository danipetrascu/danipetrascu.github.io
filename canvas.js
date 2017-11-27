document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.27.4";

var canvas = document.getElementById("id_canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100,100,20,0,2 * Math.PI);
//"TRUE" se refera la sensul acelor de ceas sau sensul contrar acelor de ceas
ctx.fillStyle = "#FF0000"
//"#FF0000" = #-culoare , FF-ROSU, 00-VERDE, 00-ALBASTRU 
ctx.fill();
ctx.stroke();