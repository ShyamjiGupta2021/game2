const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var stoneObj;
var mango1,mango2,mango3,mango4,mango5;

var launchingForce=100;

var bk_song;
function preload() {
  // Code to load a background Image.
    backgroundImg = loadImage("background.jpg");
  // Code to load player Image.
    player1Img = loadImage("player1.png");
  // Code to load a mango (the object to be shoot) Image.
    mangoImg = loadImage("mango.png");
  
    // Code to load sound
    bk_song = loadSound("sound1.mp3");
  }
  
  function setup() {
  // Code to set canvas according to the entire screen.
    canvas = createCanvas(windowWidth,windowHeight);

  // Code to run the background sound.
    bk_song.play();
    bk_song.setVolume(0.5);

    engine = Engine.create();
  	world = engine.world;
  // Code to create a player.
    player1 = createSprite(550,480,2,0.2);
    player1.scale = 0.2;
    player1.addImage("shooter",player1Img);

   
   

    stoneObj = new stone(600,440,30);
    mango1 = new mango(590,80,30);
    mango2 = new mango(500,180,30);
    mango3 = new mango(300,80,27);
    mango4 = new mango (30,70,27);
    mango5 = new mango(800,220,20);
    mango6 = new mango(700,210,20);

    launcherObject=new launcher(stoneObj.body,{x:600,y:440})
    

    Engine.run(engine);
  }
  
  function draw() {
  // Set background.
    background(backgroundImg);
  
    launcherObject.display();
    stoneObj.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();

    detectollision(stoneObj,mango1);
    detectollision(stoneObj,mango2);
    detectollision(stoneObj,mango3);
    detectollision(stoneObj,mango4);
    detectollision(stoneObj,mango5);
    detectollision(stoneObj,mango6);

   

    drawSprites();
  }
// Code to detectollision.
  function detectollision(lstone,lmango){
    
    mangBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;

    var distance = dist(mangBodyPosition.x,mangBodyPosition.y,
                       stoneBodyPosition.x,stoneBodyPosition.y);

    if (distance <= lmango.r + lstone.r){

      Matter.body.setStatic(lmango.body,false);
    }
  }

  
function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
   
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:600, y:440}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

 