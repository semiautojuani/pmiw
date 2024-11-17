class recompensa {
  constructor(posX, posY, img) {
    this.posX = posX;
    this.posY = posY;
    this.img = img;
    this.agarroRecompensa = false;
  }

  dibujar() {
    image(this.img, this.posX - 30, this.posY - 50, 50, 70);
  }

  colisionConRecompensa(personaje) {
    if (dist(this.posX, this.posY, personaje.posX, personaje.posY) < 25) {
      this.agarroRecompensa = true;
    }
  }
}
