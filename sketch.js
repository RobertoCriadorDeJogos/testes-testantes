
var player1;
var player1img;

var player2;
var player2img;

var bandido;
var bandidoimg;

function preload(){
  player1img = loadImage("cloud.png")
  player2img = loadImage("cloud.png")
  bandidoimg = loadImage("cloud.png")
}

function setup(){
  createCanvas(800,500)
  
  //create a trex sprite
  player1 = createSprite(100,100,50,50);
  player1.addImage(player1img)
}

function draw(){
  background("black")
  
  drawSprites();
}
