document.getElementByID("id_business_version").innerHTML = "Business version = 2017.11.20.0"

window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("deviceorientation,on_device_orientation);
//------------------------------------
function on_device_orientation(e)
{
	document.getElementByID("id_z").innerHTML = "z="+e.alpha;
	document.getElementByID("id_x").innerHTML = "x="+e.beta;
	document.getElementByID("id_y").innerHTML = "y="+e.gamma;
}
//------------------------------------
function on_device_motion(e)
{
	document.getElementByID("id_acc_x").innerHTML = "acc_x" + e.acceleration.x;
	document.getElementByID("id_acc_y").innerHTML = "acc_y" + e.acceleration.y;
	document.getElementByID("id_acc_z").innerHTML = "acc_z" + e.acceleration.z;
	
	document.getElementByID("id_acc_g_x").innerHTML = "acc_g_x" + e.accelerationIncludingGravity.x;
	document.getElementByID("id_acc_g_y").innerHTML = "acc_g_y" + e.accelerationIncludingGravity.y;
	document.getElementByID("id_acc_g_z").innerHTML = "acc_g_z" + e.accelerationIncludingGravity.z;
}
//------------------------------------	