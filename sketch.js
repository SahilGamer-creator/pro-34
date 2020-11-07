//Create variables here
var database;
var dog,happyDog,foodS,foodStock,readStock;
var dogimg,happydogimg;

function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");
}

function setup() {

database = firebase.database();

	createCanvas(500, 500);
  //dog.addImage(dogimg);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    happyDog.addImage("images/dogImg1.png");
  }

}



