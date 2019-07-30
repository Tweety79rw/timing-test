class Faller {
  constructor(x, y, cellSize) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.vel.div(cellSize);
    this.acc = createVector();
    this.cellSize = cellSize;
    this.strokeSize = 15;
    this.halfStroke = this.strokeSize / 2;
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  bounce() {
    if(this.pos.y * this.cellSize < this.halfStroke) {
      this.pos.y = this.halfStroke / this.cellSize;
      this.vel.y *= -1
    } else if(this.pos.y * this.cellSize > height - this.halfStroke){
      this.pos.y = (height - this.halfStroke) / this.cellSize;
      this.vel.y *= -1
    }
    if(this.pos.x* this.cellSize < this.halfStroke) {
      this.pos.x = this.halfStroke / this.cellSize;
      this.vel.x *= -1;
    } else if(this.pos.x * this.cellSize > width - this.halfStroke) {
      this.pos.x = (width - this.halfStroke) / this.cellSize;
      this.vel.x *= -1;
    }
  }
  addForce(force) {
    this.acc.add(force);
  }
  render() {
    push();
    translate(Math.round(this.pos.x) * this.cellSize, Math.round(this.pos.y) * this.cellSize);
    stroke(255);
    strokeWeight(this.strokeSize);
    point(0, 0);
    pop();
  }
}
