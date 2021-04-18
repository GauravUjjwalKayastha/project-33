const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var world, engine;
function preload(){
 backgroundImage=loadImage("snow1.jpg");
 boyImg=loadImage("boysnow.png");

}

function setup() {

  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  snow1=new Snow(400,200);
  snow2=new Snow(450,200);
  snow3=new Snow(random(0,800),random(0,200));
  snow4=new Snow(random(0,800),random(0,200));
  snow5=new Snow(random(0,800),random(0,200));
  snow6=new Snow(random(0,800),random(0,200));
  snow7=new Snow(random(0,800),random(0,200));
  snow9=new Snow(random(0,800),random(0,200));
  snow8=new Snow(random(0,800),random(0,200));
  snow10=new Snow(random(0,800),random(0,200));
  snow11=new Snow(random(0,800),random(0,200));
  snow12=new Snow(random(0,800),random(0,200));

  

}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  imageMode (CENTER);
  image(boyImg,400,200,80,80)

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();

  //drawSprites();
}