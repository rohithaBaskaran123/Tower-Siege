const Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}

function setup(){
    block8 = new Box (330,235,30,40);
    block9 = new Box (360,235,30,40);
    block10 = new Box (390,235,30,40);
    block11 = new Box (420,235,30,40);
    block12 = new Box (450,235,30,40);
}

function draw(){
    background("grey");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
}
