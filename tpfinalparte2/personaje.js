class Personaje {
 constructor(posX, posY, img, juego) {
  this.posX = posX;
  this.posY = 420;
  this.img = img;
  this.vida = 1;
  this.bala = new Bala();
  this.juegoTerminado = false;
 }

 dibujar() {
  image(this.img, this.posX - 10, this.posY - 10, 50, 70);
 }

//-------MOVIMIENTO-------//
 movimiento(keyCode) {
  if (keyCode == LEFT_ARROW) {
   this.moverIzq();
  } else if (keyCode == RIGHT_ARROW) {
   this.moverDer();
  } else if (keyCode == UP_ARROW) {
   this.moverArriba();
  } else if (keyCode == DOWN_ARROW) {
   this.moverAbajo();
  }
 }

 moverDer() {
  if (this.posX + 15 >= 600) {
   this.posX = 600;
  } else {
   this.posX += 15;
  }
 }

 moverIzq() {
  if (this.posX - 15 <= 10) {
   this.posX = 10;
  } else {
   this.posX -= 15
  }
 }

 moverArriba() {
  if (this.posY - 80 <= 10) {
   this.posY = 10;
  } else {
   this.posY -= 80;
  }
 }

 moverAbajo() {
  if (this.posY + 80 >= 420) {
   this.posY = 420;
  } else {
   this.posY += 80;
  }
 }
//------------------------//

 colisionConBala(balas){
  for (let i = 0; i < balas.length; i++) {
    let centroX = this.posX + 25;
    let centroY = this.posY + 35;
    
    let distancia = dist(centroX, centroY, balas[i].posX, balas[i].posY);
    
    if (distancia < 35) {
      this.juegoTerminado = true;
      juego.estadoActual = "derrota";
      
      sonido.stop();
      sonidoPerder.setVolume(0.2);
      sonidoPerder.play();
 
      juego.reiniciarJuego();
    }
  }
} 
}
