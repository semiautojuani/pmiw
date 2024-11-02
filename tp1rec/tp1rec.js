let obra, cantidad, lado, tamaño;
let colores = [];

function preload(){
  obra = loadImage('data/obra.jpg');
}

function setup() {
  createCanvas(800, 400);
  background(248, 240, 217);

  image(obra, 0, 0, 400, 400);
  
  lado = 24;
  cantidad = 14;
  tamaño = 24;

  colores = [color(63, 58, 112), color(42, 57, 150), color(63, 110, 130), 
             color(83, 146, 125), color(238, 235, 118)];
}

function draw() {
  grilla(410, 19, cantidad, tamaño, lado);
}

function obtenerColor(x, y) {
  let indiceColor = (x + y) % colores.length;
  return colores[indiceColor];
}

function grilla(xInicio, yInicio, cantidad, tamaño, lado) {
  for (let x = 0; x <= cantidad; x++) {
    for (let y = 0; y <= cantidad; y++) {
      let colorActual = obtenerColor(x, y);
      fill(colorActual);

      if (keyIsPressed === true && (x + y) % 2 == 0) {
        fill(random(0, 150));
      }

      rect(xInicio + x * tamaño, yInicio + y * tamaño, lado, lado);
    }
  }
}
