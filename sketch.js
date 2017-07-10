function setup() {
	var canvas = createCanvas(585, 440);
// places canvas in div element
canvas.parent("sketch-holder");
background(72, 103, 184);
smooth();
strokeWeight(.35);
frameRate(20);
}

function draw() {
	mY = mouseY;  
	mX = mouseX;
	stroke((300));
	line(random(mouseX), random(mouseX), 280, 170);
	fill(72, 103, 184);
}



