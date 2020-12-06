
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
  createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,height,1200,20);
  
  paper = new Paper(50,566,50);

  box1 = new Box(1000,580,200,20);
  box2 = new Box(900,530,20,120);
  box3 = new Box(1100,530,20,120);


  Engine.run(engine);
  
}


function draw() {
  
  background(0);

  Engine.update(engine);

  ground.display();

  paper.display();

  box1.display();
  box2.display();
  box3.display();

}

function keyPressed(){
  
  if(keyCode === UP_ARROW){
    
    Matter.Body.applyForce(paper.body,paper.body.position,{x : 85, y : -85});

  }

}

