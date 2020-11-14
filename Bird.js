class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200 ){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }

    for(var i = 0; i < this.trajectory.length; i++) {
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}

// Alex's startegy to display trajectory
// if(Math.round(frameCount%50) == 0){ 
//   this.position.push(this.body.position.x, this.body.position.y);
//   this.trajectory.push(this.position);
//   console.log(this.position);
// }
//   //console.log(this.trajectory);
// for(var i = 0; i < this.trajectory.length; i++) {
//   image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
// }