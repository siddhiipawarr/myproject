
var jethalal,daya,babita;
var jethalalImg;
var dayaGrp , babitaGrp;
var score=0 ;
var life1 , life2,life3;
var life=3;
function preload(){
jethalalImg=loadImage("Images/jethalal.png");
dayaImg=loadImage("Images/daya.png");
babitaImg=loadImage("Images/babita.png");
dayaImg=loadImage("Images/daya.png");
life1=loadImage("Images/jethalal.png");
life2=loadImage("Images/jethalal.png");
life3=loadImage("Images/jethalal.png");
dayaSound=loadSound("Images/daya.mp3");

}

function setup() {
  createCanvas(600,800);
 
  jethalal=createSprite(300,600,30,30);
  jethalal.addImage("jethalal",jethalalImg);
  jethalal.scale=0.8;
  
  life1=createSprite(60,40,10,20);
  life2=createSprite(80,40,10,20);
  life3=createSprite(100,40,10,20);

  life2.addImage("jethalal",jethalalImg);
  life2.scale=0.2;

  life3.addImage("jethalal",jethalalImg);
  life3.scale=0.2;

  life1.addImage("jethalal",jethalalImg);
  life1.scale=0.2;
 dayaGrp=new Group();
  babitaGrp=new Group();

}

function draw() {

  background('gold');  
text("score: "+ score,60,20);

if ( keyDown ("left_arrow") ) {
jethalal.x = jethalal.x-3;

}
if(keyDown("right_arrow")){
  jethalal.x = jethalal.x+3;
}
spawnBabita();
spawnDaya();
if(life==2){
  life1.visible=false;
}
if (life==1){
  life2.visible=false;
}

if(life==0){
  life3.visible=false;
  dayaGrp.visible=false;
  babitaGrp.visible=false;
  jethalal.visible=false;
  
}
if(babitaGrp.isTouching(jethalal)){
  score=score+1;
}
if(dayaGrp.isTouching(jethalal)){
  life=life-1;
}


  drawSprites();
  


}


function spawnBabita(){
if(frameCount % 400 === 0){
  babita=createSprite(Math.round(random(50,550)),-50);
  babita.addImage("babita",babitaImg);
  babita.scale=0.8;
  babita.velocityY= 2;
  jethalal.depth = babita.depth;
  jethalal.depth+=1;
  babita.lifetime=800;
  babitaGrp.add(babita);


}
}

function spawnDaya(){
  if (frameCount % 180===0 ){
    daya=createSprite(Math.round(random(120,400)),-50);
    daya.addImage("daya",dayaImg);
    daya.velocityY= 2;
    jethalal.depth = daya.depth;
    jethalal.depth+=1;
    daya.lifetime=800;
    dayaGrp.add(daya);
  }
}

function reset(){




}