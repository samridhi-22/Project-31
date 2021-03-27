const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var dropes=[]
var thunderImage1,thunderImage2,thunderImage3;
var thunderFrame;

function preload(){
  thunderImage1=loadImage("thunder1.png");
  thunderImage2=loadImage("thunder2.png");
  thunderImage3=loadImage("thunder3.png");
    
}

function setup(){
   createCanvas(400,600);
   engine = Engine.create();
   world = engine.world;
boy=new Boy();
var maxDrops=100;
for(var i=0; i<maxDrops; i++){
dropes.push(new drops(random(0,400),random(0,400),4))
}
}

function draw(){
    background("black");
    Engine.update(engine);
    boy.display();
    for(var i=0; i<dropes.length; i++){
        dropes[i].display();
        dropes[i].update();
    }
    if(frameCount%80===0){
        thunderFrame=frameCount
thunder=createSprite(random(10,370),random(10,30),10,10);
var selectImage=Math.round(random(1,3))
switch(selectImage){
    case 1:thunder.addImage(thunderImage1);break
    case 2:thunder.addImage(thunderImage2);break
    case 3:thunder.addImage(thunderImage3);break
}
thunder.scale=(random(0.6,0.9));

    }
    if(thunderFrame+10===frameCount&&thunder){
thunder.destroy();
    }
    drawSprites();
}   

