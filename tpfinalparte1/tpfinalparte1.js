//https://youtu.be/FrEOZRhn_5I
//Trabajo hecho en conjunto con Ian Urbanski

let imagenes = [];
let texto = [];
let indiceImagen = 0;
let sonido;
let botonActivo = true;

function preload() {
  for (let i = 0; i < 21; i++) {
    let nombreArchivo = 'data/' + i + '.jpg';
    imagenes[i] = loadImage(nombreArchivo);
  }
  sonido = loadSound('data/sonido1.mp3');
}

function setup() {
  createCanvas(640, 480);
  frameRate(10);
  
  cargarTexto();  
  textWrap(WORD);
  
  sonido.setVolume(0.05);

}

function draw() {
  background(0);

  image(imagenes[indiceImagen], 0, 0, 640, 480);

  if (indiceImagen === 0 && botonActivo) {
    botonSonido();
  }

  stroke(255);
  fill(150, 200);
  rect(0, 360, 640, 119);

  fill(255);
  noStroke();
  textSize(16);
  textAlign(LEFT, CENTER);
  let margen = 20;
  let yCentrado = 360 + 119 / 2;
  text(texto[indiceImagen], margen, yCentrado - 55, width - 2 * margen, 120);

 //Botones
  if (indiceImagen === 6 || indiceImagen === 17) {
    botonesDecision();
  } else if (indiceImagen === 20) {
    botonReinicio();
  } else {
    botonPasar();
  }

  if (indiceImagen === 20 && sonido.isPlaying()) {
    sonido.stop();
  }

  if (indiceImagen === 20) {
    fill(255);
    textAlign(CENTER, CENTER);
    text(texto[21], 329, 390);
  }
}

function iniciarSonido() {
  if (!sonido.isPlaying()) {
    sonido.play();
    botonActivo = false;
  }
}

function mousePressed() {
  if (indiceImagen === 0 && botonActivo &&
      mouseX > 270 && mouseX < 370 && mouseY > 50 && mouseY < 90) {
    iniciarSonido();
  }

  if (indiceImagen !== 6 && indiceImagen !== 17 && indiceImagen !== 20 && mouseX > 295 && mouseX < 345 && mouseY > 215 && mouseY < 265) {
    indiceImagen = (indiceImagen === 8 || indiceImagen === 18) ? 20 : indiceImagen + 1;
  }

  // Bifurcación 1
  if (indiceImagen === 6) {
    if (mouseX > 40 && mouseX < 140 && mouseY > 220 && mouseY < 260) {
      indiceImagen = 7;
    } else if (mouseX > 500 && mouseX < 600 && mouseY > 220 && mouseY < 260) {
      indiceImagen = 9;
    }
  }

  // Bifurcación 2
  if (indiceImagen === 17) {
    if (mouseX > 40 && mouseX < 140 && mouseY > 220 && mouseY < 260) {
      indiceImagen = 18;
    } else if (mouseX > 500 && mouseX < 600 && mouseY > 220 && mouseY < 260) {
      indiceImagen = 19;
    }
  }

  // Reinicio de la aventura
  if (indiceImagen === 20 && mouseX > 279 && mouseX < 379 && mouseY > 280 && mouseY < 320) {
    indiceImagen = 0;
    botonActivo = true;
    sonido.stop();
  }
}
