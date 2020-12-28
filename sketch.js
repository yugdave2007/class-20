var fixedRect, movingRect;

function setup() {
  createCanvas(600,600);
  fixedRect=createSprite(300, 300, 50, 50);
  fixedRect.shapeColor="red";
  movingRect=createSprite(300,150,50,50);
  movingRect.shapeColor="red";

  //movingRect.x-fixedRect.x===movingRect.width/2+fixedRect.width/2
  //___350__-300===25+25
  //50===50
}

function draw() {
  background("cyan"); 
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
 fixedRect.x- movingRect.x<movingRect.width/2+fixedRect.width/2&&
 movingRect.y-fixedRect.y<movingRect.hight/2+fixedRect.height/2 &&
fixedRect.y- movingRect.y<movingRect.hight/2+fixedRect.height/2 ){
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}



  drawSprites();
}

