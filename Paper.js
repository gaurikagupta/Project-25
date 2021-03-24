class Paper extends BaseClass {
  constructor(x,y,radius){
    super(x,y,30);
    this.image = loadImage("sprites/paper.png");
  }
  display(){
  super.display();
  }
}  
  

  /* constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':1,
          'density':1.2
      }
      this.body=Bodies.circle(x,y,radius,options);
      //this.body = Bodies.rectangle(x, y, width, height, options);
     // this.width = width;
      //this.height = height;
      this.radius=radius;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("green");
      circle(0, 0, this.radius);
      pop();
    }
  };*/

