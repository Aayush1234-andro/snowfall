var snowflake,snowflakeImg
var bgImg;
var kid ;
var sound;
var boy;

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  bgImg = loadImage("snow1.jpg");
  sound = loadSound("snow.mp3");
  boyImg = loadImage("boy.png")
}
function setup() {
  createCanvas(800,400);
  sound.play();

  invisibleGround = createSprite(400,350,400,10);
  invisibleGround.visible = false;
  boy = createSprite(400,300,10,10)
  boy.scale= 0.05
  boy.addImage(boyImg)
 


}

function draw() {
  background(bgImg);  
  
  boy.velocityX=0
  if(keyIsDown(LEFT_ARROW)) {
    boy.velocityX=-1;
}

  if(keyIsDown(RIGHT_ARROW)) {
    boy.velocityX=1;
  }


//add gravity

boy.collide(invisibleGround);
  
  

  createSnowflake();
  drawSprites();
}
function createSnowflake(){
  if(frameCount%5===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}

