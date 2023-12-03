var waterbk;

function preload(){
waterbk=loadImage("wf.jpg")

}

function setup(){
createCanvas(1350,580)
w1=createSprite(650,400,2500,50)
w1.addImage(waterbk)
w1.scale=2.7


}

function draw(){
background("white")
drawSprites()
}