
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stand;
var    box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var sling, ground, polygon, ball;
var score = 0;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	stand = new Ground(200,630,250,20);

	box1 = new Box(120,600,30,40);
	box2 = new Box(150,600,30,40);
	box3 = new Box(180,600,30,40);
	box4 = new Box(210,600,30,40); 
	box5 = new Box(240,600,30,40);
	box6 = new Box(270,600,30,40);
	box7 = new Box(300,600,30,40);

	box8 = new Box(150,560,30,40);
	box9 = new Box(180,560,30,40);
	box10 = new Box(210,560,30,40);
	box11 = new Box(240,560,30,40);
	box12 = new Box(270,560,30,40);

	box13 = new Box(180,520,30,40);
	box14 = new Box(210,520,30,40);
	box15 = new Box(240,520,30,40);

	box16 = new Box(210,480,30,40);

	var options={
		density:2
	}
	
	polygon = Bodies.circle(700,590,20,options)
	World.add(world,polygon)
	

	//ball = new Paper(700,590,20)

	sling = new Launcher(polygon,{x:700,y:550})

	
}


function draw() {
  rectMode(CENTER);
  background("blue");
  text("Score:"+score, 700,40);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  stand.display();
  sling.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  ellipse(polygon.position.x,polygon.position.y,20)
  //polygon.display();
  //ball.display();
  drawSprites();
  //mouseDragged();
  //mouseReleased();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
	if(keyCode===32){
		sling.attach(this.polygon)
	}
}