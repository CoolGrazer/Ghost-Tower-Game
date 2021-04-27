var spooky
var tower;
var towerimg;
var ghost;
var ghostimg;
var climber;
var door;
var climberimg;
var doorimg;
var invisibleblock;
var invisibleblockgroup;
var doorgroup;
var climbwallsgroup;
var gameState = "PLAY";
function preload()
{
  ghostimg = loadImage("ghost-standing.png");
  climberimg = loadImage("climber.png");
  doorimg = loadImage("door.png");
  towerimg = loadImage("tower.png");
  spooky = loadSound("spooky.wav");
}
function setup()
{
  createCanvas(600,600);
  spooky.loop();
  tower = createSprite(300,300);
  tower.addImage(towerimg);
  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostimg);
  ghost.scale = 0.5;
  tower.velocityY = 1;
  doorgroup = new Group();
  invisibleblockgroup = new Group();
  climbwallsgroup = new Group();
  
}
function draw()
{
 
  background("white");
  if(gameState === "PLAY")
    {
  if(tower.y > 400)
    {
      tower.y = 300;
    }
  if(keyDown("left_arrow"))
    {
      ghost.x = ghost.x - 3;
    }
       if(climbwallsgroup.isTouching(ghost))
         {
           ghost.velocityY = 0;
         }
      if(invisibleblockgroup.isTouching(ghost)|| ghost.y > 600)
         {
           ghost.destroy();
            gameState = "END";
         }
      
    if(keyDown("right_arrow"))
    {
      ghost.x = ghost.x + 3;
    }
  if(keyDown("space"))
    {
      ghost.velocityY = - 10;
    }}
  ghost.velocityY = ghost.velocityY + 0.8
  spawnDoors();
  drawSprites();
  if(gameState === "END")
    {
stroke("yellow"); fill("yellow"); textSize(30); text("Game Over", 230,250)
    }
}
function spawnDoors()
{
  if(frameCount % 250 === 0)
    {
      door = createSprite(200 ,-15);
      climber = createSprite(200,-15);
      invisibleblock = createSprite(200,15);
      door.velocityY = 1;
      climber.velocityY = 1;
      invisibleblock.velocityY = 1;
      invisibleblock.width = climber.width;
      invisibleblock.height = 2;
      door.x = Math.round(random(100,400));
      climber.x = door.x;
      invisibleblock.x = door.x;
      door.addImage(doorimg);
      climber.addImage(climberimg);
      ghost.depth = door.depth;
      ghost.depth = ghost.depth + 1;
      door.lifetime = 800;
      invisibleblock.lifetime = 800;
      doorgroup.add(door);
      invisibleblockgroup.add(invisibleblock);
      climbwallsgroup.add(climber);
      
    }
}
