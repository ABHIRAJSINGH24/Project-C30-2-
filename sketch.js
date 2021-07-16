const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var bobRadius = 40;
var bobY = 500;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var engine,world;

function preload()
{
	
}

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof = new Roof(width/2,height/4,bobRadius*5+30,30);

  bob1 = new Bob(roof.body.position.x-2*bobRadius,bobY,bobRadius);
	bob2 = new Bob(roof.body.position.x-bobRadius,bobY,bobRadius);
	bob3 = new Bob(roof.body.position.x,bobY,bobRadius);
	bob4 = new Bob(roof.body.position.x+bobRadius,bobY,bobRadius);
  bob5 = new Bob(roof.body.position.x+2*bobRadius,bobY,bobRadius);
  
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

  rope1 = new Rope(bob1.body,roof.body,-bobRadius*2,0);
  rope2 = new Rope(bob2.body,roof.body,-bobRadius,0);
  rope3 = new Rope(bob3.body,roof.body,0,0);
  rope4 = new Rope(bob4.body,roof.body,bobRadius,0);
  rope5 = new Rope(bob5.body,roof.body,bobRadius*2,0);

  keyPressed();
  
	Engine.run(engine);
  //Render.run(render);
  
}

function draw() {
  rectMode(CENTER);
  background(144,238,144);
  
  roof.display();

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

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW && bob1.body.position.y>=490){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}