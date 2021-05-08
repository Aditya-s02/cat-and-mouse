var cat1,cat2,cat3,cat,mouse1,mouse2,mouse3,mouse,garden
function preload() {
    //load the images here
    cat1 = loadAnimation("cat1.png")
    cat2 = loadAnimation("cat2.png","cat3.png")
    cat3 = loadAnimation("cat4.png")
    
    mouse1 = loadAnimation("mouse1.png")
    mouse2 = loadAnimation("mouse2.png","mouse3.png")
    mouse3 = loadAnimation("mouse4.png")

    garden = loadImage("garden.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(900,600)
    cat.addAnimation("catSleeping",cat1)
    cat.scale = 0.2
    
    mouse = createSprite(200,600)
    mouse.addAnimation("mouseS",mouse1)
    mouse.scale = 0.2
    
}
2
function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.velocityX =0;
        cat.addAnimation("catlastimage",cat3)
        cat.x = 300
        cat.changeAnimation("catlastimage")
        mouse.addAnimation("mouselastimage",mouse3)
        mouse.changeAnimation("mouselastimage")

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      cat.velocityX = -3;
      cat.addAnimation("catRunning",cat2)
      cat.changeAnimation("catRunning")
      mouse.addAnimation("mouseT",mouse2)
      mouse.changeAnimation("mouseT")
  }


}
