const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var Pbase,Cbase;
var playerArcher,computerArcher ;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  Pbase = new PlayerBase(250,random(450,height-300),280,180);
  Cbase = new ComputerBase(windowWidth-200,Pbase.body.position.y,280,180);
  playerArcher = new Player(250, Pbase.body.position.y - 153, 50, 180);
  computerArcher = new computerPlayer(windowWidth-200,Cbase.body.position.y-153,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   Pbase.display();
   Cbase.display();
  


   //display Player and computerplayer
   playerArcher.display();
   computerArcher.display();

}
