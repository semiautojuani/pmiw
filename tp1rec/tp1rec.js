let obra, cantidad, lado, tamaño, color1, color2, color3;


function preload() {
  obra = loadImage('data/obra.jpg');
}

function setup() {
  createCanvas(800, 400);
  background(248, 240, 217);

  image(obra, 0, 0, 400, 400);

  lado = 24;
  cantidad = 14;
  tamaño = 24;

  color1 = color(0);
  color2 = color(255, 0);
}

function draw() {
  grilla(cantidad, tamaño, lado, color1, color2);
  
  console.log(mouseX, mouseY);
}

function grilla(cantidad, tamaño, lado, colorA, colorB) {
  for (let x = 0; x <= cantidad; x++) {
    for (let y = 0; y <= cantidad; y++) {
      let colorActual = calcularColor(x, y, colorA, colorB);

      fill(colorActual);
      rect(410 + x * tamaño, 19 + y * tamaño, lado, lado);
    }
  }
}

function calcularColor(x, y, colorA, colorB) {
  let distancia = dist(mouseX, mouseY, 410 + x * tamaño + lado / 2, 19 + y * tamaño + lado / 2);
  
  if (distancia < lado * 2) {
    let mousex = map(mouseX, 0, width, 0, 255);
    let mousey = map(mouseY, 0, height, 0, 255);
    return color(mousex, mousey, random(100, 255));
    
  } else if ((x + y) % 2 === 0) {
    return colorA;
    
  } else {
    return colorB;
    
  }
}

function keyPressed() {
  color3 = color(random(0, 128), random(128), random(128));
  color1 = color3;
}

function mousePressed() {
  reiniciarDibujo(); 
}

function reiniciarDibujo() {
  color1 = color(0);
  color2 = color(255, 0);
}
