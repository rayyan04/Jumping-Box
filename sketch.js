var canvas;
var music;
var surface1
var surface2
var surface3
var surface4
var box
var edges
function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    surface1=createSprite(100,580,100,20)
    surface1.shapeColor="red"

    surface2=createSprite(300,580,100,20)
    surface2.shapeColor="blue"

    surface3=createSprite(500,580,100,20)
    surface3.shapeColor="green"

    surface4=createSprite(700,580,100,20)
    surface4.shapeColor="orange"

    //create box sprite and give velocity
 box=createSprite(random(20,750),10,30,30)
 box.shapeColor="white"
 box.velocityY= 5
 box.velocityX= 4

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
if (surface1.isTouching(box) && box.bounceOff(surface1)){
box.shapeColor="red"

}
if (surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor="blue"
    
    }
if (surface3.isTouching(box) && box.bounceOff(surface3)){
box.shapeColor="green"
music.stop()

box.velocityX=0
box.velocityY=0
}
if (surface4.isTouching(box) && box.bounceOff(surface4)){
    music.play()
    box.shapeColor="orange"
    
}

edges=createEdgeSprites();
box.bounceOff(edges)

drawSprites()
}
