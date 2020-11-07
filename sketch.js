var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(150, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2);

  speed=random (223,321);
  weight=random (30,52);
  thickness=random (22,83);
   
}

function draw() {
  
  background("purple");  
 wall.shapeColor="black";

 bullet.shapeColor="white";

bullet.velocityX=speed;

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}


  drawSprites();
}
function hasCollided(lbullet,lwall,rbullet,rwall){
  bulletLeftSide=lbullet.x+lbullet.width;
  wallLeftSide=lwall.x;
  bulletRightSide= rbullet.x + rbullet.width;
  wallRightSide = rwall.x;
if(bulletRightEdge>=wallLeftEdge){
  bulletRightSide= rbullet.x + rbullet.width;
  wallRightSide = rwall.x;
bulletRightEdge = bullet.x + bullet.width;
 return true
}
else{
return false}
}
