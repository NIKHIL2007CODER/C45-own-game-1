const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var BackgroundImage;
var spaceship1,spaceshipIMG;

function preload() {
 BackgroundImage=loadImage("spacebackground.jpg");
 spaceshipIMG = loadImage("spaceship1.png");
}

function setup(){
    var canvas = createCanvas(windowWidth-17, windowHeight-10);
    engine = Engine.create();
    world = engine.world;

   spaceship1 = new Spaceship(200,500,200,200);
   spaceship2 = new Spaceship(500,500,230,230);
   spaceship3 = new Spaceship(800,500,230,230);
   
   Espaceship1 = new ESpaceship(200,100,200,200);
   Espaceship2 = new ESpaceship(500,120,230,230);
   Espaceship3 = new ESpaceship(800,120,230,250);
   
   lazer1 = new lazer(350,350,80,200);
   lazer2= new lazer(450,350, 100 , 100);
}

function draw(){
    background(BackgroundImage);
    Engine.update(engine);
   

    spaceship1.display();
    spaceship2.display2();
    spaceship3.display3();

    Espaceship1.display();
    Espaceship2.display2();
    Espaceship3.display3();

    lazer1.lazer1();
    lazer2.lazer2();
}



