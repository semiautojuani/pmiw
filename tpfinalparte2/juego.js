class juego {
  constructor() {
    this.crearRecompensa();
    this.crearEnemigos();
    this.crearPlataforma();
    this.crearPersonaje();
  }

  crearPersonaje() {
    this.personaje = new personaje(width/2, 465, pj);
  }

  crearEnemigos() {
    this.enemigos = [];
    let tiempos = [5000, 3000, 7000, 2000, 4000, 6000];
    for (let i = 0; i < 6; i++) {
      this.enemigos.push(new enemigo(600, i * 80 + 50, tiempos[i], villano));
    }
  }

  crearPlataforma() {
    this.plataforma = new plataforma();
  }

  crearRecompensa() {
    this.recompensa = new recompensa(348, 60, aliado); 
  }

  dibujar() {
    if (!this.personaje) {
      console.error("El personaje no está definido.");
      return;
    }

    if (this.personaje.juegoTerminado) {
      this.reiniciarJuego();
    } else if (this.recompensa.agarroRecompensa) {
      this.reiniciarJuego();
      this.ajustarVelocidadBalas(); 
    } else {
      for (let enemigo of this.enemigos) {
        enemigo.dibujar();
      }

      this.personaje.dibujar();
      this.plataforma.dibujar();
      this.recompensa.dibujar();
  
      this.recompensa.colisionConRecompensa(this.personaje);

      for (let enemigo of this.enemigos) {
        this.personaje.colisionConBala(enemigo.balas);
      }
    }
  }

  reiniciarJuego() {
    this.personaje = new personaje(width / 2, 465, pj);
    this.enemigos = [];
    let tiempos = [5000, 3000, 7000, 2000, 4000, 6000];
    for (let i = 0; i < 6; i++) {
      this.enemigos.push(new enemigo(600, i * 80 + 50, tiempos[i], villano));
    }
    this.recompensa = new recompensa(348, 72, aliado);
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
    for (let enemigo of this.enemigos) {
      enemigo.teclaPresionada(keyCode);
    }
  }

  ajustarVelocidadBalas() {
    for (let enemigo of this.enemigos) {
      for (let bala of enemigo.balas) {
        bala.setVelocidadRapida(true);
      }
    }
  }
}
