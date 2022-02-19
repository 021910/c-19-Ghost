var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300,10,10)
  ghost.addImage(ghostImg)
  ghost.scale= 0.5
  climbersGroup = new Group()
  doorsGroup = new Group()       
}
function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
      if (keyDown("space")){
        ghost.velocityY = -10
      }
      ghost.velocityY = ghost.velocityY + 1
      if(keyDown("right_arrow")){
        ghost.x = ghost.x + 2
      }
      if(keyDown("left_arrow")){
        ghost.x = ghost.x - 2}
        if (climbersGroup.isTouching(ghost)){
          ghost.velocityY = 0
          ghost.destroy()
        }
        SpawnDoors()
    drawSprites()
}
function SpawnDoors(){
  if (frameCount % 300 === 0){
  var door = createSprite(200,-50)
  door.addImage(doorImg)
  var railing = createSprite(200,10)
  railing.addImage(climberImg)
  door.velocityY = 1
  door.x = Math.round(random(50,500))
  railing.x = door.x
  railing.velocityY = 1
  door.lifetime = 800
  doorsGroup.add(door)
  climbersGroup.add(railing)
}
}