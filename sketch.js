function setup() {
	var canvas = createCanvas(585, 440);
// places canvas in div element
canvas.parent("sketch-holder");
background(000);
smooth();
strokeWeight(.35);
frameRate(18);

  var outside = color(153, 51, 0);
}

function draw() {
	mY = mouseY;  
	mX = mouseX;
	stroke((300));
	line(random(mouseX), random(mouseX), 280, 170);
	fill(72, 103, 184);
}



