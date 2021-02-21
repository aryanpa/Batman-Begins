const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop;
var maxDrops = 100;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(500,700);
    engine = Engine.create();
    world = engine.world;

    drop = new createDrop(250,350,7);
    
  
   
    
}

function draw(){
    background(0);
    Engine.update(engine);

   
    drop.display();


}   

