var rect1;
var rect2;


function setup() {
  createCanvas(800,400);

  rect1=createSprite(300, 10, 50, 50);
  rect1.shapeColor="black";
  rect2 = createSprite(300,400,50,50);
  rect2.shapeColor="purple";

  rect1.velocityY=3;
  rect2.velocityY=-3;
}

function draw() {
  background("pink");  

  // rect2.x= mouseX;
   //rect2.y = mouseY;

  

   if((rect1.y-rect2.y< rect2.height/2+rect1.height/2)&&
   (rect2.y-rect1.y< rect2.height/2+rect1.height/2)){
     rect1.velocityY=rect1.velocityY*(-1);
     rect2.velocityY=rect1.velocityY*(-1);
   //rect1.shapeColor="red";
   //rect2.shapeColor="red";
   }

   //else{
    // rect1.shapeColor="black";
     //rect2.shapeColor="black";
  // }

  drawSprites();
}