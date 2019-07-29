class Faller {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = createVector();
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  bounce() {
    if(this.pos.y <= 0 || this.pos.y >= height) {
      this.vel.y *= -1;
    }
    if(this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
  }
  addForce(force) {
    this.acc.add(force);
  }
  render() {
    push();
    translate(this.pos.x, this.pos.y);
    stroke(255);
    strokeWeight(5);
    point(0, 0);
    pop();
  }
}
