document.getElementById("id_business_version").innerHTML = "Business version = 2018.01.28.1";

window.addEventListener("devicemotion",on_device_motion);

function on_device_motion(e)
{
	document.getElementById("id_acc_g_x").innerHTML="acc g x =" + Math.round(e.accelerationIncludingGravity.x * 100)/100 ;
	document.getElementById("id_acc_g_y").innerHTML="acc g y =" + Math.round(e.accelerationIncludingGravity.y * 100)/100 ;
	document.getElementById("id_acc_g_z").innerHTML="acc g z =" + Math.round(e.accelerationIncludingGravity.z * 100)/100 ;

	var beta  =  Math.atan(e.accelerationIncludingGravity.x / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	var gamma = -Math.atan(e.accelerationIncludingGravity.y / e.accelerationIncludingGravity.z) * 180 / Math.PI;

	document.getElementById("id_rot_x").innerHTML="beta=" + Math.round(beta * 100)/100 + "grade";
	document.getElementById("id_rot_y").innerHTML="gamma=" + Math.round(gamma * 100)/100 + "grade"; 
	
	
	
}
