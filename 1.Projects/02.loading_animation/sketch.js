var angle = 0;

var lines = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	controlCircles();
}

let particles = [];

function mouseDragged(){
	particles.push(new Particle(mouseX, mouseY));
}


function draw() {
	background(90);
	for(let i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].show();
	}
	printCircles();
}
