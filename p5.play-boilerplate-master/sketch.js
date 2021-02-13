var hr, mn, sc;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  noStroke();
}

function draw() {
  background(255,255,255);
  
  scAngle = map(sc, 0, 60, 0, 360);
  fill(100, sc, 0);
  ellipse(width/2, height/2, sc, sc);

  mnAngle = map(mn, 0, 60, 0, 360);
  fill(200, mn, 0);
  ellipse(width/2, height/2, mn, mn);

  hrAngle = map(hr, 0, 60, 0, 360);
  fill(300, hr, 0);
  ellipse(width/2, height, hr, hr);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  push();
  translate(0,0);
  rotate(scAngle);
  stroke(100, 0, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  translate(0,0);
  rotate(mnAngle);
  stroke(200,0,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  push();
  translate(0,0);
  rotate(hrAngle);
  stroke(300,0,0);
  stroke(7);
  line(0,0,25,0);
  pop();

  drawSprites();
}

function hour(){
  text('Current hour: \n' + hr, 5, 50);
}

function minute(){
  text('Current minute: \n' + mn, 5, 50);
}

function second(){
  text('Current second: \n' + sc, 5, 50);
}