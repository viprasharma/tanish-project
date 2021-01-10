
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,division1,division2,division3,division4,division5,division6;
var particle;
var part = []
      var div=[];
      var plink=[];
      var score=0;
     var divheight=300;

      
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,800,800,20);
  for(var j=50;j<=width;j=j+50){
    plink.push(new Plinko(j,75,10));
  
    
  }
    for(var j=50;j<=width-10;j=j+50){
      plink.push(new Plinko(j,175,10));
        
    }
       
     for(var j=50;j<=width;j=j+50){
        plink.push(new Plinko(j,275,10));
          
     }
     for(var j=50;j<=width-10;j=j+50){
      plink.push(new Plinko(j,375,10));
        
   }
    
     
    
 
      for( var i=0;i<=width;i=i+80){
          div.push(new Division(i,height-divheight/2,10,divheight));
      }

      

   
   //createSprite(400, 200, 50, 50);
 
 /* division2 = new Division(192,800,5,400);
  division3 = new Division(288,800,5,400);
  division4 = new Division(384,800,5,400);
  division5 = new Division(480,800,5,400);
  division6 = new Division(0,800,5,400);*/
//plinko= new Plinko(140,400,10);


}

function draw() 
{
    background("black");  
    Engine.update(engine);
    //drawSprites()
  
    ground.display();

    if(frameCount%60===0){
      part.push(new Particle(random(width/2-30, width/2+30), 10,10));
      score++;
    }

    for(var k=0;k<div.length;k++)
    {
    
      div[k].display();
    
    }

    for(var j=0;j<plink.length;j=j+1)
    {
      plink[j].display();
    }
  
  for(var i=0;i<part.length;i++){
    
  part[i].display();
  }
}
  
 
 
    
    
       
  
  

 
    
 

 
 //div[i].display();
 //division1.display();
/*  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();*/ 
 // particle.display();
  