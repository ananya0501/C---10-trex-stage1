var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,400);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

 //ground sprite
 ground = createSprite(width/2,370);
 ground.addImage("ground",groundImage);
ground.x = ground.width/2
}


function draw(){
  //set background color 
  background("black");
  
  //logging the y position of the trex
  console.log(ground.x)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground)

  //ground moving backwards
ground.velocityX = -3;

//to reset the ground x position
if(ground.x<0)
{
  ground.x = ground.width/2;
}

  drawSprites();
}