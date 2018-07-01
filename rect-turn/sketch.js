function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 100; j++) {
      push();
      translate(width / 2, height / 2);
      var ratio = i / 7;
      var angle = (sin(millis() / 800.0 + ratio * (PI / 2)) * PI) / 2;
      var a = 300 * sin(angle);
      stroke(255);

      rotate(angle + i);
      noFill();

      rectMode(CENTER);
      rect(0, 0, a, a);
      pop();
    }
  }
}
