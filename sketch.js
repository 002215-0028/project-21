var bullet, wall, thickness;
var speed, weight;


function setup() {
var canvas=createCanvas(1600,400);
  speed=random(55, 90);
  weight=random(400, 1500);
  thickness=random(22, 83);
bullet=createSprite(50, 200, 5, 10);
bullet.velocityX=speed;
bullet.shapeColor="white";

wall=createSprite(1200, 200, thickness, height/2);
wall.shapeColor=color(80, 80, 80);
}

function draw() {
  background(0, 0, 0); 
  if (wall.x-car.x < car.width+wall.width/2){
    hasCollided();
    
  }

  drawSprites();
}
function hasCollided(){
  bullet.velocityX=0;
  var damage=0.5 *weight*speed*speed/22509;
  if(damage>10){
    wall.shapeColor=color("red");
  }
  if(damage<10 && damage>100){
    wall.shapeColor=color("green");
  }

}