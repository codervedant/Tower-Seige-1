const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;
var platform, ground;
var bird, slingShot;


function setup(){
    createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);

    platform = new Ground(1000, height/2 + 50, 100, 10);

    Engine.run(engine);
}


function draw(){
    
    rectMode(CENTER);

    background("cyan");
    
    Engine.update(engine);

    ground.display();
    platform.display();
}