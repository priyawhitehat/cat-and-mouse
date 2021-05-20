var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var bgImg;

function preload() 
{
    //load the images here
    bgImg     = loadImage("images/garden.png");
    catImg1   = loadAnimation("images/cat1.png");
    catImg2   = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3   = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup()
{
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(200,200,20,20);
    cat.addAnimation("catStanding",catImg3);

    mouse = createSprite(500,400,20,20);
    mouse.addAnimation("mouseStanding",mouseImg3);
}

function draw() 
{

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.changeAnimation("catHappy",catImg1);
        mouse.changeAnimation("mouseHappy",mouseImg1);
        cat.frameDelay = 25;
        mouse.frameDelay = 25;
    }

    keyPressed();
    drawSprites();
}


function keyPressed()
{

  //For moving and changing animation write code here
   if(keyCode === RIGHT_ARROW)
   {
       mouse.addAnimation("mouseTeasing",mouseImg2);
       mouse.changeAnimation("mouseTeasing",mouseImg2);
       mouse.frameDelay = 25;
       cat.addAnimation("cat",catImg2);
       cat.changeAnimation("cat",catImg2);
       cat.frameDelay = 25;
   }

   if(keyCode === LEFT_ARROW)
   {
       mouse.addAnimation("mouseTeasing",mouseImg2);
       mouse.changeAnimation("mouseTeasing",mouseImg2);
       mouse.frameDelay = 25;
       cat.addAnimation(catImg2);
       cat.changeAnimation(catImg3);
       cat.frameDelay = 25;
   }

   if(keyCode === UP_ARROW)
   {
       mouse.addAnimation(mouseImg3);
       mouse.changeAnimation(mouseImg3);
       mouse.frameDelay = 25;
       cat.addAnimation(catImg3);
       cat.changeAnimation(catImg3);
       cat.frameDelay = 25;
   }

}

