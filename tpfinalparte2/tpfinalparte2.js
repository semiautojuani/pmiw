//Videojuego creado por los alumnos de la comisión 5 Ian Urbanski (120379/3) y Juan Ignacio Ventimiglia (119167/6).

let juego, pj, villano, aliado, proyectil;
let sonido, sonidoClick, sonidoGanar, sonidoPerder;
let fondoArreglo = [];
let textos = [];

function preload() { 
 textos = loadStrings('data/textMK.txt')
  
 soundFormats('mp3');
 sonido = loadSound('data/sonido.mp3');
 sonidoClick = loadSound ('data/menu.mp3');
 sonidoGanar = loadSound ('data/victoria.mp3')
 sonidoPerder = loadSound ('data/fatality.mp3'); 
  
 pj = loadImage('data/personaje.png');
 villano = loadImage('data/enemigo.png');
 aliado = loadImage('data/aliado.png');
 proyectil = loadImage('data/proyectil.png');
 
 for (let i = 0; i <= 5; i++) {
  fondoArreglo[i] = loadImage('data/pantalla' + i + '.png');
 }
}
 
function setup() {
 createCanvas(640, 480);
 
 userStartAudio();
 
 juego = new Principal();
 
 sonido.setVolume(0.2);
 sonido.loop();
}

function draw() {
 background(220);
 juego.inicio();
}

function mousePressed() {
  if (!sonido.isPlaying()) {
    sonido.loop(); 
  }
  
  for (let boton of juego.botones) {
    if (boton.posicionMouse()) {
      sonidoClick.play();
      sonidoClick.setVolume(0.2);
      boton.click();
    }
  }
}


function keyPressed() {
 juego.teclaPresionada(keyCode);
}
