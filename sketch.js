//Create variables here
var dog,happydog,database,foodS,foodStock;
function preload()
{
dogImg = loadImage("dogImg.png")
happydogimg = loadImage("dogImg1.png")  

}


function setup() {
  createCanvas(500, 500);
  dog= createSprite(250,350,10,60)
  dog.addImage(dogImg)
  dog.scale = (0.2)
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock)
  foodStock.set(20)
}


function draw() {  
background(46, 139, 87)

if(foodS!== undefined){
  textSize(20)
  fill(255)
  text("No. of bottles left: "+foodS,150,150)
}






if(keyWentDown(UP_ARROW)) {
dog.addImage(happydogimg)
foodS = foodS-1
writeStock(foodS)

}
if(keyWentUp(UP_ARROW)) {
  dog.addImage(dogImg) 
  }
  
if(foodS<=0){
  writeStock(20)
}

  drawSprites();
}
function readStock(data){
foodS = data.val()
}
function writeStock(x){
  database.ref("/").update({
    Food:x
  })
 
}