var fixrect,movingrect;
function setup() {

  createCanvas(displayWidth,displayHeight);
  boy=createSprite (displayWidth/3,displayHeight/3);
  girl=createSprite(displayWidth/2,displayHeight/3);

  player=createSprite(displayWidth/2,displayHeight/2);


 }

function draw() {

  background(0);
 upbutton=createButton('↑')
 upbutton.position(displayWidth/12,displayHeight-200);
 downbutton=createButton('↓')
 downbutton.position(displayWidth)
 leftbutton=createButton('←')
 rightbutton=createButton('→')
  drawSprites();
}