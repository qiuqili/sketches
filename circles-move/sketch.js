var t = 200;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  fill(0, 25);
  noStroke();
  rect(0, 0, 600, 600);
  t = t + 0.04;
  stroke(242, 102, 139);
  strokeWeight(2);
  ellipse(1 * sin(t) * 150 + 300, cos(t) * 150 + 300, 200, 200);
  stroke(255, 184, 196);
  ellipse(0.85 * sin(t) * 120 + 300, cos(t) * 120 + 300, 100, 100);
  stroke(255);
  ellipse(0.7 * sin(t) * 110 + 300, cos(t) * 110 + 300, 50, 50);
}
