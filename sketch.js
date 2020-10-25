var player, stuckPlayer, ground;
var ball1, ball2, ball3, ball4;
var dragon;
var fire1, fire2, fire3, fire4;
var line1, line2, line3, line4, line5, line6, line7, line8, line9, line10;

function setup(){
    createCanvas(900,800);
    ground=createSprite(430,750,800,5);
    ground.shapeColor="red";
    player=createSprite(150,395,20,20);
    player.shapeColor="yellow";
    stuckPlayer=createSprite(300,160,20,20);
    stuckPlayer.shapeColor="blue";
    ball1=createSprite(150,250,30,30);
    ball2=createSprite(145,245,30,30);
    ball3=createSprite(140,240,30,30);
    ball4=createSprite(135,235,30,30);
    dragon=createSprite(260,260,30,30);
    dragon.shapeColor="orange";
    fire1=createSprite(150,300,30,30);
    fire2=createSprite(200,290,30,30);
    fire3=createSprite(230,300,30,30);
    fire4=createSprite(240,290,30,30);
    line1=createSprite(430,65,795,5);
    line2=createSprite(30,405,5,690);
    line3=createSprite(830,405,5,690);
    line4=createSprite(390,700,720,5);
    //line5=createSprite(80,360,100,5);
    //line6=createSprite(360,90,650,5);
   // line7=createSprite(90,135,650,5);
    //line8=createSprite(100,180,650,5);
    //line9=createSprite(150,190,650,5)
    //line10=createSprite(120,170,650,5);
}
function draw(){
  background("green");
 

if(keyDown("RIGHT_ARROW")){
    player.x=player.x+2;
}
if(keyDown("LEFT_ARROW")){
    player.x=player.x-2;
}
if(keyDown("UP_ARROW")){
    player.y=player.y-2;
}
if(keyDown("DOWN_ARROW")){
    player.y=player.y+2;
}
if(player.isTouching(stuckPlayer)){
  stuckPlayer.collide(player);
}

  drawSprites();
}
