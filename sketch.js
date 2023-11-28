var sea
var ship

function preload(){
seaImg = loadImage("sea.png")
shipAnim = loadAnimation("ship-1.png","ship-1.png","ship-1.png","ship-2.png","ship-2.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);

  

  sea = createSprite(0,250,400,20)
  sea.addImage(seaImg)
  sea.scale=0.38
  sea.velocityX=-0.8
  

  
  ship = createSprite (80,250,200,200)
  ship.addAnimation("ship-1.png",shipAnim);
  ship.scale=0.2




}

function draw() {
  background("blue");
  
  if (sea.x < 0) {
    sea.x = sea.width/5.3;
  }

  if (keyDown("D")) {
    ship.x = ship.x + 0.8
  }
  if (keyDown("A")) {
    ship.x = ship.x - 0.8
  }
  
  

  drawSprites()



}
