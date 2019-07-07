const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight * 0.9;
canvas.width = window.innerWidth * 0.95;
const w = canvas.width; //width of the canvas
const h = canvas.height; //height of the canvas
var length = h / 3;
var lineWidth = h / 100;
var color = "rgb(128, 0, 100)";
tree();

function tree() {
	var len = length;
	ctx.save();
	ctx.translate(w / 2, h);
	branch(len, lineWidth);
	ctx.restore();
}
function branch(len, lineWidth) {
	ctx.save();

	ctx.translate(0, -len);

	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, len);
	ctx.lineWidth = lineWidth;

	//

	ctx.strokeStyle = color;

	ctx.stroke();
	if (len > 2) {
		ctx.save();
		ctx.rotate(Math.PI / 6);
		if (len < 100) {
			color = "rgb(255," + (len * 2).toString(10) + ", 203)";
		} else {
			color = "rgb(128, 0, 100," + ((len * 4) / w).toString(10) + ")";
		}
		branch(len * 0.67, lineWidth / 1.2);
		ctx.restore();
		ctx.save();
		ctx.rotate(-Math.PI / 3);
		if (len < 100) {
			color = "rgb(255," + (len * 2).toString(10) + ", 203)";
		} else {
			color = "rgb(128, 0, 100," + ((len * 4) / w).toString(10) + ")";
		}
		branch(len * 0.67, lineWidth / 1.2);
		ctx.restore();
	}
	ctx.restore();
}
