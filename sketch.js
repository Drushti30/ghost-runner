 

var towerImage, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "PLAY"
var fire, lavaImage;

function preload(){
  towerImage =  loadImage("tower.png")
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  //spookySound =  
  fireImage=loadImage("firebg.png")
}

function setup(){
  createCanvas(600,500);
 // spookySound.loop();
  
  //create the tower sprite, image and velocity
  tower = createSprite(300,300);
  tower.addImage(towerImage)
  tower.velocityY=1;
  fire=createSprite(300,480);
  fire.addImage(fireImage)
  fire.scale=2;
  fire.setCollider("rectangle",0,0,500,10)
  ghost=createSprite(200,200,10,10);
  ghost.addImage(ghostImg)
  ghost.scale=0.5
  ghost.setCollider("circle",0,0,10)
  
  climberGroup=createGroup()
  
  
  //create the ghost sprite, image 
  
  
  //make the groupsprites-door, climber
  
  
   
  //make the invisibleBlock for ghost to crash
  
  //invisibleBlock.debug=true; //to see the collider
}

function draw(){
  background(0);
  if (gameState === "PLAY") {
    
    if(tower.y>400){
      tower.y=300
    }
    
    if(keyDown("space")){
      ghost.velocityY=-2
      
    }
    
    ghost.velocityY=ghost.velocityY+0.5
    
    if(keyDown("left")){
      ghost.x=ghost.x-3
    }
    
    if(keyDown("right")){
      ghost.x=ghost.x+3
    }
    
    if(ghost.isTouching(fire)){
      gameState="END"
    }
    
    if(ghost.isTouching(climberGroup)){
      ghost.velocityY=0
    }
    
    //bring the tower back to original position 
    
    
    //with left_arrow, make ghost shift to the left
    
    
    //with right arrow , move ghost to the right
    
    
    //make the ghost jump with space and apply gravity
     
    
     
    spawnDoors();

    
     //for ghost to rest on the climber
    //if(climbersGroup.isTouching(ghost)){
      
   // }
    
    //if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      
   // }
    
  }
    
    drawSprites();
  
  
  if (gameState === "END"){
    textSize(30)
    fill("red")
    text("GAME OVER",250,250)
    
  }

}

function spawnDoors() {
  
  if(frameCount%200===0){
    console.log(frameCount)
    door=createSprite(random(100,500),-50,10,10)
    door.addImage(doorImg)
    door.velocityY=1
    ghost.depth=door.depth
    ghost.depth=ghost.depth+1
    climber=createSprite(door.x,door.y+50,10,10)
    climber.addImage(climberImg)
    climber.velocityY=1
    climberGroup.add(climber)
    
  }
  
  //write code here to spawn the doors Periodically in the tower 
  
   
    //create the door, climber, invisibleBlock sprite and image, velocity
    
    //door.x to be random - give same x position to climber and Invisiblegroup 
    
     
    //depth of the ghost 
    
     
     
    //assign lifetime to all three sprites
     

    
    //add each door, invisibleBlock and climber to the group
     
  
}

