document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.27.3";
//window.addEventListener("deviceorientation",on_device_orientation);
window.addEventListener("devicemotion",on_device_motion);
//---------------------------------------
function deseneaza_cerc (unghi1, unghi2)
{
	var canvas = document.getElementById("id_canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,400,400);
	
	ctx.rect(0,0,400,400);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(200+unghi1*200/90,200+unghi2*200/90,20,0,2 * Math.PI);		//"0,0" locul de unde sa inceapa desenu; "20" raza cercului
	ctx.fillStyle = "#FF0000";			//"#FF0000" = #-culoare , FF-ROSU, 00-VERDE, 00-ALBASTRU 
	ctx.fill();
	ctx.strokeStyle = "#00FF00";		//Culoarea data reprezinta culoarea contului cercului
	ctx.lineWidth = 5;					//Numarul "5" reprezinta grosimea contului
	ctx.stroke();
}
//---------------------------------------
function on_device_motion(e)
{
	var beta = Math.atan(e.accelerationIncludingGravity.x / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	var gamma = - Math.atan(e.accelerationIncludingGravity.y / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	
	deseneaza_cerc(gamma,beta);
}
//---------------------------------------
function on_device_orientation(e)
{
	deseneaza_cerc(e.gamma, e.beta);
}
//----------------------------------------------------------------------------------------------------------------------
