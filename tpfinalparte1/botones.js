function botonSonido(x, y, w, h, texto) {
  stroke(255);
  strokeWeight(1);
  fill(0, 150);
  rect(x, y, w, h);

  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  text(texto, x + w/2, y + h/2);
}

function botonPasar(x, y, d) {
  stroke(255);
  strokeWeight(2);
  fill(0, 100);
  ellipse(x, y, d, d);
  
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  text(">", x, y);
}

function botonesDecision(x1, y1, w, h, texto1, x2, y2, texto2) {
  // Opción A
  fill(0, 100);
  rect(x1, y1, w, h);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto1, x1 + w/2, y1 + h/2);
  
  // Opción B
  fill(0, 100);
  rect(x2, y2, w, h);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto2, x2 + w/2, y2 + h/2);
}

function botonReinicio(x, y, w, h, texto) {
  fill(0, 100);
  rect(x, y, w, h);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto, x + w/2, y + h/2);
}
