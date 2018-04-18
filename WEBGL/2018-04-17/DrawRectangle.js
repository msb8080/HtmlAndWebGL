//DrawRectangle.js
//简单绘制2维矩形
function main(){
	var canvas = document.getElementById("webgl");
	
	if(!canvas){
		console.log("Failed to retrieve the <canvas> element");
		return false;
	}
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = 'rgba(0,0,255,1.0)';
	ctx.fillRect(10,10,50,50);	
	
}