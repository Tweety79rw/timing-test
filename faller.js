class Faller {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  bounce() {
    if(this.pos.y >= 800) {
      this.vel.mult(-1);
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
