document.getElementById("id_business_version").innerHTML = "Business version = 2017.12.14.2";


var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");
var lista_culori=["#FF0000","#00FF00","#00FFFF","#FFFF00","#FFFFFF"];
canvas.addEventListener("touchstart",on_start_touch);
//---------------------------------------
function on_start_touch(e)
{
var touches = e.touches;
for(var i=0; i<touches.length; i++)
{
	context.beginPath();
	context.arc(touches.item(i).pageX,touches.item(i).pageY,20,0,2*Math.PI);
	context.strokeStyle=lista_culori[i];
	context.lineWidth=5;
	context.stroke(); 
}
	
}
//---------------------------------------

function on_move_touch(e)
{
	var touches=e.touches;
	for (var i=0; i<touches.lenght;i++)
	{
	context.beginPath();
	context.arc(touches.item(i).pageX,touches.item(i).pageY,20,0,2*Math.PI);
	context.strokeStyle=lista_culori[i];
	context.lineWidth=5;
	context.stroke();
	}
}
