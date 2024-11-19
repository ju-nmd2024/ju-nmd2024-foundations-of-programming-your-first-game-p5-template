
let x = 100;
let y = 100;
let speed = 4;
let normalSpeed = 4; 
let slowSpeed = 1;
let gameState = 'start';
let difficulty = '';
let lastColorChange = 0;
let colorChange = 1000;


// plate 
let plates = [
   {x: 200, y: 550, isGreen:false},
   {x: 400, y: 550, isGreen:false},
   {x: 600, y: 550, isGreen:false},
];

function setup () {
 createCanvas(800,600);
}

function gameCondition() {
   if(y >= height - 150) {
      for (let plate of plates) {
         if (x >= plate.x - 70 && x <= plate.x + 100) { 
            if ( y >= plate.y - 20) {
               if (plate.isGreen) {
                  gameState = 'win';
               } else {
                  gameState = 'gameover';
               }
            }
         }
      }
   }
}
function setPlateColor() {
   // red plate 
   plate[0].isGreen = false;
   plate[1].isGreen = false;
   plate[2].isGreen = false;
   
   // grean color easy difficulty 
   if (difficulty === 'easy') {
   plate[0].isGreen = true;
   plate[1].isGreen = true;
   plate[2].isGreen = true;

   } else if (difficulty === 'medium') {
   plate[0].isGreen = true;
   plate[1].isGreen = true;

   } else if  ( difficulty === ' hard') {
   plate[0].isGreen = true;

   }

} 

function updateHard (){
   if ( difficulty === 'hard' && millis() - lastColorChange >= colorChange){
      for (let plate of plates) {
         plate.isGreen = false;
      }
      let greenPlateIndex = floor(random(3));
      plates[greenPlateIndex].isGreen = true;
      lastColorChange = millis();
   }
}
function gameOver(){
   if (y >= height - 150){
      for (let plate of plates){
         if (x >= plate.x - 70 && x <= plate.x + 100){
            if (!plate.isGreen && y >= plate.y - 20){
               gameState = 'gameover';
            }
         }
      }
   }
}
function cake (x ,y) {
    
   // cake 
   strokeWeight(2);
   fill(101, 67, 33);
   rect(x - 70 , y - 15, 200 , 130 , 7 );
  
   // brighter part of the cake
   push(); 
   fill(139, 89, 39);
   noStroke();
   // up part 
   rect(x - 70, y + 15, 200 , 25 );
   // middle part 
   rect(x - 70, y + 50, 200 , 25);
   // last part 
   rect(x - 70, y + 85, 200 , 25);
   pop();
  
   // with cream 
   fill(255, 245, 245);
   noStroke();
   ellipse(x + 30  , y - 10 , 45 , 18);
   stroke(0, 0, 0);
   strokeWeight(1);
   ellipse(x + 30 , y - 10 , 30, 15);
  
   // cherry shadow
   fill(180, 0, 0);
   noStroke();
   ellipse(x + 30 , y - 15 , 22, 22);
   // cherry 
   fill(220, 20, 60);
   ellipse(x + 28, y - 16, 20, 20);
   // cherry shine 
   fill(255, 255, 255);
   ellipse(x + 25 , y - 20 , 6, 6);
   strokeWeight(3);
   fill(255, 0, 0);
   line(x + 120 , y + 60, x + 130, y + 80);
  
  
  }
  
function draw () {

 background(255, 255, 255);

// start screen 
if (gameState === 'start'){
   textAlign(CENTER);
   textSize(32);
   fill(0, 0, 0);
   text("cake drop game", width/2, 200);
   
   fill(255, 200, 255);
   rect(350, 250, 100, 40, 5);
   fill(0, 0, 0);
   textSize(20);
   textAlign(CENTER, CENTER);
   text("start", 400, 270);

   // difficulty screen 
} else if (gameState === 'difficulty') {
   textAlign(CENTER);
   textSize(32);
   fill(0, 0, 0);
   text("Select Difficulty", width/2, 200);

   fill(255, 200, 255);
   rect(250, 250, 100, 40, 5);
   rect(350, 250, 100, 40, 5);
   rect(450, 250, 100, 40, 5);

   fill(0, 0, 0);
   textSize(20);
   textAlign(CENTER, CENTER);
   text("EASY", 300, 270);
   text("MEDIUM", 400, 270);
   text("HARD", 500, 270);
   
   // gane play screen 
} else if (gameState === 'playing') {
   updateHard();

   for (let plate of plates) {
      if (plate.isGreen) {
         fill(0, 255, 0);
      } else {
         fill(255, 0 ,0);
      }
      rect(plate.x, plate.y, 100, 20);
   }
}
// movment 
if (keyIsDown(UP_ARROW)) {
   y = y - 5; 
} else {
   y = y + speed;
}
if (keyIsDown(LEFT_ARROW)) {
   x = x - 5;
}
if (keyIsDown(RIGHT_ARROW)) {
   x = x + 5; 
}
if (x < 70) x = 70;
if (x > width - 70) x = width - 70;
if (y < 0) y = 0;
if (y > height - 50) y = height - 50;

gameOver();

cake(x, y);

  if ( gameState === 'gameover') {
   textAlign(CENTER);
   textSize(32);
   fill(255, 0, 0);
   text("Game Over!", width/2, height/2);

   //restart 
   fill(255, 200, 255);
   rect(350, 350, 100, 40, 5);
   fill(0, 0, 0);
   textSize(20);
   textAlign(CENTER,CENTER);
   text("RESTART", 400, 370);
 }
}

// mouse 

function mousePressed() {
   if (gameState === 'start') {
      if (mouseX > 350 && mouseX < 450 && mouseY > 250 && mouseY < 290) {
         gameState = 'difficulty';
      }
   } else if (gameState === 'difficulty') {
      if (mouseY > 250 && mouseX < 290) {
         if (mouseX > 250 && mouseX < 350) {
            difficulty = 'easy';
            gameState = 'playing';
            setPlateColors();
         } else if ( mouseX > 350 && mouseX < 450) {
            difficulty = 'medium';
            gameState = ' playing';
            setPlateColors();
         } else if ( mouseX > 450 && mouseX < 550) {
            difficulty = 'hard';
            gameState = 'playing';
            setPlateColors();
            lastColorChange = millis();
         }
         
      } 
   } else if (gameState === 'gameover') {
      if ( mouseX > 350 && mouseX <450 && mouseY > 350 && mouseY < 390) {
         x = 100;
         y = 100;
         gameState = start;
      }
   }
} 
  