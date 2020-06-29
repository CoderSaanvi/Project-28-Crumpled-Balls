var dustbin1,dustbin2,dustbin3;
var dustbin;
var paper,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 700);
  engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	

	paper = new Paper(50,670);
	dustbin1 = new Dustbin(1000,670,200,20);
	dustbin2 = new Dustbin(890,620,20,400);
	dustbin3 = new Dustbin(1110,620,20,400);
  ground = new Ground(600,height-10,1200,20);
  launcher = new Launcher(paper.body,{x:200,y:100});
  
}

function preload(){
  dustbin = loadImage("sprites/dustbingreen.png")
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  launcher.display();

  image(dustbin,895,410);
  dustbin.resize(210,0);

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper.body,paper.position,{x:95,y:-95})
	}
}

function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launcher.fly();
}



