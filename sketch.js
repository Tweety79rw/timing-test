let faller;
let timer;
function setup() {
  createCanvas(1600,800);
  faller = new Faller(width/2, 0);
  timer = new Timer();
}
function draw() {
  background(0);
  timer.step();
  let gravity = createVector(0, 9.8);
  gravity.mult(timer.delta);

  faller.addForce(gravity);
  faller.update();
  faller.render();
}
