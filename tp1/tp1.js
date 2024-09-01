//https://youtu.be/Yuv9cu52ILA
let obra, cantidad, lado, tamaño, reinicio, color1, color2, color3;

function preload(){
 obra = loadImage('data/obra.jpg');
}

function setup() {
createCanvas (800,400);
background(248, 240, 217);

image(obra, 0, 0, 400, 400);
 
 lado = 24;
 cantidad = 14;
 tamaño = 24;

 color1 = color(63, 58, 112);
 color2 = color(42, 57, 150);
 color3 = color(63, 110, 130);
}


function draw() {
 for (let x =0; x<=cantidad; x++){
   for (let y =0; y<=cantidad; y++){
    rect(410+x*tamaño, 19+y*tamaño, lado, lado);
    if ((x+y)%2==0){
      fill(color1);
    }
     else{
      fill(color2);
      }
     if (keyIsPressed === true && (x+y)%2==0){
        fill(random(0,150));
     }
  }
 }
}
