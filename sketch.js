var back, back_pic;

var player, player_pic;

var carsGroup;

var pic1, pic2, pic3, pic4, pic5, pic6;

var gameState = "play";



function preload() {

  back_pic = loadImage("images/road.png");

  player_pic = loadImage("images/player.png");

  pic1 = loadImage("images/ob1.png");
  pic2 = loadImage("images/ob2.png");
  pic3 = loadImage("images/ob3.png");
  pic4 = loadImage("images/ob4.png");
  pic5 = loadImage("images/ob5.png");
  pic6 = loadImage("images/ob6.png");


}

function setup() {
  createCanvas(500, 500);

  player = createSprite(199, 347, 10, 10);
  player.addImage("player",player_pic);
  player.scale = 0.2;

  back = createSprite(200, 200, 10, 10);
  back.addImage("back",back_pic);
  back.scale = 2.9;

}


function draw () {
   background("lightBlue");

  
  if (gameState === "play") {


    back.velocityY = 13;

    if (back.y > 350) {

      back.y = 200;

    }

    player.setCollider("circle", -3, 3, 30);


    if (keyDown(RIGHT_ARROW)) {

      player.velocityX = 8;

    }


    if (keyDown(LEFT_ARROW)) {

      player.velocityX = -8;

    }

    
    if (frameCount % 60 === 0) {

      var rand = Math.round(random(1, 6));
        var c1 = createSprite(200, 200, 200, 200);
        c1.scale = 0;
        c1.x = randomNumber(20, 176);
        c1.y = -60;
        c1.velocityY = 8;
        c1.scale = 0.8;
  
      switch (rand) {
      case 1:
        c1.addImage(pic1);
        break;
      case 2:
        c1.addImage(pic2);
        break;
      case 3:
        c1.addImage(pic3);
        break;
      case 4:
        c1.addImage(pic4);
        break;
      case 5:
        c1.addImage(pic5);
        break;
      case 6:
        c1.addImage(pic6);
      break;
        default:
        break;
      }
      
        carsGroup.add(c1);
  
      }
  
  
  
      if (World.frameCount % 110 === 0) {
  
      var rand = Math.round(random(1, 6));
        
        var c2 = createSprite(200, 200, 200, 200);
        c2.scale = 0;
        c2.x = randomNumber(187, 176);
        c2.y = -60;
        c2.velocityY = 8;
        c2.scale = 0.8;
  
  
      switch (rand) {
      case 1:
        c2.addImage(pic1);
        break;
      case 2:
        c2.addImage(pic2);
        break;
      case 3:
        c2.addImage(pic3);
        break;
      case 4:
        c2.addImage(pic4);
        break;
      case 5:
        c2.addImage(pic5);
        break;
      case 6:
        c2.addImage(pic6);
        break;
        default:
        break;
     
      }
    
        carsGroup.add(c2);
  
      }
  
  
  
      if (World.frameCount % 130 === 0) {
  
        var rand = Math.round(random(1, 6));
    
        var c3 = createSprite(200, 200, 200, 200);
        c3.scale = 0;
        c3.x = randomNumber(297, 176);
        c3.y = -60;
        c3.addImage("ob" + rand);
        c3.velocityY = 8;
        c3.scale = 0.8;
  
        switch (rand) {
      case 1:
        c3.addImage(pic1);
        break;
      case 2:
        c3.addImage(pic2);
        break;
      case 3:
        c3.addImage(pic3);
        break;
      case 4:
        c3.addImage(pic4);
        break;
      case 5:
        c3.addImage(pic5);
        break;
      case 6:
        c3.addImage(pic6);
        break;
        default:
        break;
     
      }
    
  
  
  
  
        carsGroup.add(c3);
  
  
      }
  
     // carsGroup.setLifetimeEach(2); 
  
        
     

   

    player.velocityY = 0; 

    if (player.isTouching(carsGroup)) {

      gameState = "end";

    }

  }


  if (gameState === "end") {

    if (keyDown("r")) {

      reset();

    }


    end();

    textSize(20);
    fill("red");
    text("You Loose, Press R to restart!!!", 67, 167);

  }

  createEdgeSprites();

  player.collide(bottomEdge);
  player.collide(leftEdge);
  player.collide(rightEdge);


drawSprites();

}



function end() {

  back.velocityY = 0;
  back.velocityX = 0;

  carsGroup.setVelocityYEach(0);
  carsGroup.setVelocityXEach(0);

  player.velocityY = 0;
  player.velocityX = 0;

  carsGroup.setLifetimeEach(-1);

}

function reset() {

  gameState = "play";

  carsGroup.destroyEach();

  player.x = 195;
  player.y = 347;


}
