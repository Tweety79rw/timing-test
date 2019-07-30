let faller;
let timer;
const cellSize = 50;
function setup() {
  createCanvas(800, 600);
  faller = new Faller(width/2/cellSize, 0, cellSize);
  timer = new Timer();
}
function draw() {
  background(0);
  timer.step();
  let gravity = createVector(0, 9.8);
  gravity.div(cellSize);
  gravity.mult(timer.delta);


  faller.addForce(gravity);
  faller.update();
  faller.render();
  faller.bounce();
}
