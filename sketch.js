var canvas;
var music;
var box1,box2,box3,box4;
var blocker;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 box1 = createSprite(100,580,200,30)
 box1.shapeColor = "blue"

 box2 = createSprite(300,580,200,30)
 box2.shapeColor = "cyan"

 box3 = createSprite(500,580,200,30)
 box3.shapeColor = "orange"

 box4 = createSprite(700,580,200,30)
 box4.shapeColor = "purple"


 edges = createEdgeSprites();


    //create box sprite and give velocity
    blocker = createSprite(random(20,700),100,40,40)
    blocker.shapeColor = "white"
    blocker.velocityX = 9
    blocker.velocityY = 9

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   blocker.bounceOff(edges)
   if(blocker.isTouching(box1)){
       blocker.shapeColor = "blue"
       blocker.bounceOff(box1)
       music.play();
   }

   if(blocker.isTouching(box2)){
    blocker.shapeColor = "cyan"
    blocker.bounceOff(box2)
    
    }

    if(blocker.isTouching(box3)){
    blocker.shapeColor = "orange"
    blocker.velocityX = 0
    blocker.velocityY = 0
    music.stop();
    }

    if(blocker.isTouching(box4)){
        blocker.shapeColor = "purple"
        blocker.bounceOff(box4)
        
        }

        drawSprites();
    //add condition to check if box touching surface and make it box
}
