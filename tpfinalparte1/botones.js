function botonSonido() {
  stroke(255);
  strokeWeight(2);
  fill(0, 150);
  rect(270, 50, 100, 40);

  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Iniciar sonido", 320, 70);
}

function botonPasar() {
   stroke(255);
  strokeWeight(2);
  fill(0, 100);
  ellipse(320, 240, 50, 50);
  
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  text(">", 320, 240);
}

function botonesDecision() {
   // Opción A
  fill(0, 100);
  rect(40, 220, 100, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  text("A", 89, 240);
  
  // Opción B
  fill(0, 100);
  rect(500, 220, 100, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  text("B", 550, 240);
}

function botonReinicio() {
  fill(0, 100);
  rect(279, 280, 100, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Reiniciar", 329, 300);
}
