document.getElementByID("id_business_version").innerHTML = "Business version = 2017.11.20.0"

window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("deviceorientation,on_device_orientation);
//------------------------------------
function on_device_orientation(e)
{
	document.getElementByID("id_z").innerHTML = "z="+ Math.round(e.alpha * 100)/100;
	document.getElementByID("id_y").innerHTML = "y="+ Math.round(e.gamma * 100)/100;
	document.getElementByID("id_x").innerHTML = "x="+ Math.round(e.beta * 100)/100;
}
//------------------------------------
function on_device_motion(e)
{
	document.getElementByID("id_acc_x").innerHTML = "acc_x" + Math.round(e.acceleration.x * 100)/100;
	document.getElementByID("id_acc_y").innerHTML = "acc_y" + Math.round(e.acceleration.y * 100)/100;
	document.getElementByID("id_acc_z").innerHTML = "acc_z" + Math.round(e.acceleration.z * 100)/100;
	
	document.getElementByID("id_acc_g_x").innerHTML = "acc_g_x" + Math.round(e.accelerationIncludingGravity.x * 100)/100;
	document.getElementByID("id_acc_g_y").innerHTML = "acc_g_y" + Math.round(e.accelerationIncludingGravity.y * 100)/100;
	document.getElementByID("id_acc_g_z").innerHTML = "acc_g_z" + Math.round(e.accelerationIncludingGravity.z * 100)/100;
}
//------------------------------------	