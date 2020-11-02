
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImg
var stone
var chain
var ground
var tree
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10, mango11
function preload()
{
boyImg=loadImage('Plucking mangoes/boy.png')	

treeImg=loadImage('Plucking mangoes/tree.png')

}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy=createSprite(100,500,10,10)
	boy.addImage(boyImg)
	boy.scale=0.1

	

	stone=new Stone (900,400,50,50)

	mango1=new Mango (800,200,8)
	mango2=new Mango (760,180,8)
	mango3=new Mango (720,230,8)
	mango4=new Mango (680,280,8)
	mango5=new Mango (870,190,8)
	mango6=new Mango (930,290,8)
	mango7=new Mango(890,240,8)
	mango8=new Mango(740,290,8)
	mango9=new Mango(790,250,8)
	mango10=new Mango(830,240,8)
	mango11=new Mango(850,280,8)

	tree=createSprite(800,360,400,480)
	tree.addImage(treeImg)
	tree.scale=0.4

chain= new Slingshot(stone.body,{x:70,y:480})

ground= new Ground(width/2,height-10,1000,20)





	Engine.run(engine);
  
}


function draw() {
  
  Engine.update(engine);
  background("lightBlue");

  drawSprites();
  stone.display()
  chain.display()
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)
  detectCollision(stone,mango11)
  
  

  
  
 
}


function mouseDragged()
{

Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})


}

function mouseReleased()
{

	chain.fly()
        
        
        


}


function detectCollision(lstone,lmango)
{

mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance<=lmango.r+lstone.r)
{

Matter.Body.setStatic(lmango.body,false)

}




}

function KeyPressed()
{



	if( KeyCode==="Space")
	{

Matter.Body.setPosition(stone.body,{x:70,y:480})
chain.attach(stone.body)


	}
}

