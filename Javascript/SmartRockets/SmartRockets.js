var population;
var lifespan = 400;
var lifeP;
var count = 0;
var target;
var maxforce = 0.2;
var scoreP;
var score;

var rx = 225;
var ry = 150;
var rw = 50;
var rh = 10;

function setup() {
    createCanvas(400, 400);
    rocket = new Rocket();
    population = new Population();
    lifeP = createP();
    scoreP = createP();
    target = createVector(width / 2, 50);
    score = 0;
}

function draw() {
    background(0);
    population.run();
    lifeP.html(count);
    scoreP.html(score);

    count++;
    if (count == lifespan) {

        population.evaluate();
        population.selection();
        //population = new Population();
        count = 0;
    }

    fill(255);
    rect(rx, ry, rw, rh);

    ellipse(target.x, target.y, 16, 16);
}