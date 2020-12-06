
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var t1;
var ground1;
var s1;
var bimage;
var m1,m2,m3,m4;

function preload()
{
	bimage=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground1=new Ground(400,680,800,20);
	//Create the Bodies Here.
 t1=new Tree();
 s1=new Stone(120,525,40);

 m1=new Mango(550,400,20);
 m2=new Mango(580,300,20);
 m3=new Mango(600,200,20);
 m4=new Mango(650,150,20);
 m5=new Mango(490,330,20);
 m6=new Mango(700,250,20);

 chain1=new Chain(s1.body,{x:115,y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  t1.display();
  ground1.display();
  
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  imageMode(CENTER);
  image(bimage,150,590,100,300);
  s1.display();
  chain1.display();
  detectcollision(s1,m1);
  detectcollision(s1,m2);
  detectcollision(s1,m3);
  detectcollision(s1,m4);
  detectcollision(s1,m5);
  detectcollision(s1,m6);

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(s1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain1.fly();
 
}
function detectcollision(stone,mango){

  mo=mango.body.position;
  so=stone.body.position;

  var distance=dist(mo.x,mo.y,so.x,so.y);
  if(distance<100){
Matter.Body.setStatic(mango.body,false);
  }
}
