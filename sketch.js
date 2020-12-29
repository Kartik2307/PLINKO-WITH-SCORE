var particle=null;
var plinkos=[];
var divisions=[];
var divisionHeight=300;

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var world,engine;

var score=0;
var turn=0;
var game=0;
var count=0;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world

  ground= new Ground(240,800,480,10)

  for (var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }

  for (var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }

  for (var k=15; k<=width-10; k=k+50){
    plinkos.push(new Plinko(k,175,10))
  }

  for (var k=40; k<=width-10; k=k+50){
    plinkos.push(new Plinko(k,275,10))
  }

  for (var k=15; k<=width-10; k=k+50){
    plinkos.push(new Plinko(k,375,10))
  }

  Engine.run(engine);
}

function draw() {
  background(0);  

 ground.display();

fill("red")
textSize(40)
strokeWeight(2)
text("SCORE: " + score,140,455)
textSize(20)
text("200",20,550)
text("200",100,550)
text("500",180,550)
text("500",260,550)
text("100",340,550)
text("100",420,550)


for (var k=0;k<divisions.length;k++){
  divisions[k].display();
}

for (var k=0;k<plinkos.length;k++){
  plinkos[k].display();
}

if (particle!==null){
  particle.display();

  if (particle.body.position.y>600){

    if(particle.body.position.x<140){
      score=score+200;
      particle=null;
      count++; 
    }
  }
}

if (particle!==null){
  particle.display();

  if (particle.body.position.y>600){
    
    if(particle.body.position.x<300){
      score=score+500;
      particle=null;
      count++;
    }
  }
}


if (particle!==null){

  particle.display();

  if (particle.body.position.y>600){
    
    if(particle.body.position.x<460){
      score=score+100;
      particle=null;
     count++;
    }
  }
}

if (count>=5){
  game=0;
  textSize(40)
  fill("yellow")
  text("GAME OVER",100,240)
  particle=null;
}
}


function mousePressed(){
  if (game!=="0"){
    turn++;
    particle=new Particle(mouseX,10,10)
  }
}