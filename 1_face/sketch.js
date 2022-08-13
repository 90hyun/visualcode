function setup() {
  createCanvas (500, 500);
  background (200);
}

function draw() {
  strokeWeight(2);
  fill (255);
  rectMode (CENTER);
  rect (250,500,80,250);
  ellipseMode(CENTER);
  ellipse (250,250,150,300);
  fill (0);
  ellipse (250,200,10,20);
  ellipse (200,200,10,20);
  line (220,220,200,280);
  line (200,280,220,280);
  triangle()
}