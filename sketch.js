// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/jxGS3fKPKJAvar cells = [];

function setup() {
  createCanvas(700, 700);
  this.cells.push(new Cell());
  this.cells.push(new Cell());
}

function draw() {
 background(51);
 for (var i = 0; i < this.cells.length; i++) {
   this.cells[i].move();
   this.cells[i].show();
 }
}

function mousePressed() {
  for (var i = this.cells.length-1; i >= 0; i--) {
    if (this.cells[i].clicked(mouseX, mouseY)) {
        this.cells.push(this.cells[i].mitosis());
        this.cells.push(this.cells[i].mitosis());
      this.cells.splice(i, 1);
    }
  }
}
