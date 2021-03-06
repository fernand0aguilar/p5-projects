var position;
var velocity;
var acceleration;
var mass;

function Mover(m, x, y){
  this.position = new p5.Vector(x, y);
  this.velocity = new p5.Vector(0, 0);
  this.acceleration = new p5.Vector (0, 0);
  this.mass = m;

  this.applyForce = function(force){
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.display = function(){
    stroke(0);
    strokeWeight(2);
    fill(0, 127);
    ellipse(this.position.x, this.position.y, 16*this.mass, 16*this.mass);
  }

  this.checkEdges = function(){

    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    }
    else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }

    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  }
}
