class Particle {
  
    constructor(x, y,r,c) {
      var options = {
          isStatic:false,
          restitution:0.8, 
          friction:0.5,
        density:1,
      }
     /// this.image=loadImage("paper.png");
      this.x=x;
      this.y=y;
    this.r=r;
    this.c=c;
    this.body=Bodies.circle(this.x,this.y,this.r,options);
    this.color= color(random(0,255),random(0,255),random(0,255));
   //this.image=loadImage("paper.png");
    World.add(world,this.body);
   
    this.part=[];
    var plink=[];
    
    var divheight=300;
    
    
  } 
  display()
  
  { 
    var pos =this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    //rectMode(CENTER);
    //rect(0, 0, this.width, this.height);
    noStroke();
fill (this.color);

    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r);
   
  // imageMode(CENTER);
  // image(this.image,0,0,this.width,this.height);
    pop();
    
    
    
  }
  
  }