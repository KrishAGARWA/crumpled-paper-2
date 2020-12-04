
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine
var world
var ball,ball1,ball2;
var ground1
var box1
var dutsbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball= new Box(690,350,200,20)
ball1=new Box(570,310,20,130)
ball2=new Box(780,310,20,130)
ground1=Bodies.rectangle(400,370,800,20,{isStatic:true})
	World.add(world,ground1)

box1=new Pp(20,340)
dutsbin= new lox(700,300,100,100)
console.log(box1)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  ball.display()
    ball1.display()
	ball2.display()
	box1.display()
	fill("white")
rect(ground1.position.x,ground1.position.y,800,20)
dutsbin.display()
//keyPressed()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Body.applyForce(box1.body,box1.body.position,{x:85, y: -150})

}}
