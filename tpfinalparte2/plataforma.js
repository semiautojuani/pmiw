class plataforma {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0);
  }

  dibujar() {
    fill(0);
    rect(275, 80, 200, 10); 
    fill(25);
    rect(420, 160, 155, 10); 
    fill(100);
    rect(100, 160, 225, 10); 
    fill(120);
    rect(250, 240, 200, 10); 
    fill(230);
    rect(125, 320, 150, 10); 
    fill(240);
    rect(380, 320, 150, 10); 
    fill(255);
    rect(225, 400, 200, 10); 
  }
}
