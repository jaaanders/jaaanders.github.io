var particles = [];

function setup() {
    createCanvas(400, 400);
}

function mousePressed() {
    particles.push(new Particle(mouseX, mouseY));
}

function draw() {
    background(200);
    for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
    }
}