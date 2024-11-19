
let x = 100;
let y = 100;
let speed = 4;
let normalSpeed = 4; 
let slowSpeed = 1;
let gameState = 'start';
let difficulty = '';

// plate 
let plates = [
   {x: 200, y: 550, isGreen:false},
   {x: 400, y: 550, isGreen:false},
   {x: 600, y: 550, isGreen:false},
]

function setup () {
 createCanvas(800,600);
}

function setPlateColor(){
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
  
function draw (){

 background(255, 255, 255);
 if (keyIsDown(32) || keyIsDown(UP_ARROW)) {
    speed = slowSpeed;
 } else {
    speed = normalSpeed;
 }
 cake (x, y);
 if (y < 550){
    y = y + speed;
 }
}     

// use the up arrow key or space to control the speed of the cake