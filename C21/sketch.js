const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball; 
var button1,button2; 


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var options= {
   restitution:0.95
  }
  ball=Bodies.circle(200,200,10,options);
  World.add(world,ball);


 
  button1=createImg("right.png");
  button1.position(220,30); 
  button1.size(30,30);
  button1.mouseClicked(vFuerza);

  button2=createImg("up.png");
  button2.position(100,30); 
  button2.size(30,30);
  button2.mouseClicked(hFuerza);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,10);




  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function vFuerza(){

Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0}); 

}

function hFuerza(){

Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.005}); 

}