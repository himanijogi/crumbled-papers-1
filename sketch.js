
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodi
	ground=createSprite(400,700,800,98)
	notch=createSprite(500,600,5,15)
	var paper_options={
		restitution:1.0
		//isStatic=true
	}
 paper=Bodies.circle(500,100,5,paper_options)
 World.add(world,paper)
 
	Engine.run(engine);
  console.log(paper)
}


function draw() {
  rectMode(CENTER);
  background(0);
  //paper.display();
  ellipseMode(RADIUS)
  ellipse(paper.position.y,paper.position.x,70,70)
  Matter.Body.setStatic(paper, false);
  //paper.collide(ground);
  //paper.collide(notch)
  drawSprites();
  Throw()
}
function Throw(){
if (keyDown(UP_ARROW)){
	paper.velocityY=5
	paper.velocityX=5
}
}

