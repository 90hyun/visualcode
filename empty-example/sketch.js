function setup() {
  createCanvas (500, 500);
  background (100);
}

function draw() {
  strokeWeight(2);
  line (250,0,250,500);
  line (0,250,500,250);
  line (500,500,0,0);
  line (500,0,0,500);
  rectMode (CENTER);
  rect (250,250,250,250);
  ellipse (250,250,250,250);
}