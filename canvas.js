document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.27.6";

var canvas = document.getElementById("id_canvas");
var ctx = canvas.getContext("2d");

ctx.translate (100,50);				//Modificarea pozitie de "0" a locului unde sa deseneze

ctx.beginPath();
ctx.arc(0,0,20,0,2 * Math.PI);		//"0,0" locul de unde sa inceapa desenu; "20" raza cercului
									//"TRUE" se refera la sensul acelor de ceas sau sensul contrar acelor de ceas
ctx.fillStyle = "#FF0000";			//"#FF0000" = #-culoare , FF-ROSU, 00-VERDE, 00-ALBASTRU 
ctx.fill();
ctx.strokeStyle = "#00FF00";		//Culoarea data reprezinta culoarea contului cercului
ctx.lineWidth = 5;					//Numarul "5" reprezinta grosimea contului
ctx.stroke();
