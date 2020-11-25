var ground
var bob1,bob2,bob3,bob4,bob5

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800,600);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,250,500,20)
bob1 = new Paper(400,450,"red")
bob2 = new Paper(450,450,"white")
bob3 = new Paper(500,450,"orange")
bob4 = new Paper(350,450,"yellow")
bob5 = new Paper(300,450,"blue")

rope1 = new rope(bob1.body,ground.body,0,0)
rope2 = new rope(bob2.body,ground.body,40,0)
rope3 = new rope(bob3.body,ground.body,80,0)
rope4 = new rope(bob4.body,ground.body,-40,0)
rope5 = new rope(bob5.body,ground.body,-80,0)
  Engine.run(engine);
  
  
  
}


function draw() {
  background("white");
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-50})

}
}
function mouseDragged(){
Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY})



}



