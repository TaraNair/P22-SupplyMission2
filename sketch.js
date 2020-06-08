var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1, rect1Body;
var rect2, rect2Body;
var rect3, rect3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15
	
	rect1 = createSprite(300, 600, 20, 100);
	rect1.shapeColor = color(255, 0, 0)

	rect2 = createSprite(400, 640, 200, 20);
	rect2.shapeColor = color(255, 0, 0)

	rect3 = createSprite(500, 600, 20, 100);
	rect3.shapeColor = color(255, 0, 0)

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	rect1Body = Bodies.rectangle(300, 600, 20, 100 , {isStatic:true} );
	World.add(world, rect1Body);
	
	rect2Body = Bodies.rectangle(400, 640, 200, 20 , {isStatic:true} );
	World.add(world, rect2Body);
	
	rect3Body = Bodies.rectangle(500, 600, 20, 100 , {isStatic:true} );
	World.add(world, rect3Body);
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

   	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}




