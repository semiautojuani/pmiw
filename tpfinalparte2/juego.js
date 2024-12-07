class juego {
  constructor() {
    this.contadorRecompensas = 0;
    this.crearRecompensa();
    this.crearEnemigos();
    this.crearPlataforma();
    this.crearPersonaje();
    this.pantalla = new pantalla();
    this.pantallaActual = "inicio";
    
    this.botonX = width / 2 - 48;
    this.botonY = 400;
    this.botonAn = 100;
    this.botonAl = 50;
    
    this.botonJugar = new boton(this.botonX, this.botonY, this.botonAn, this.botonAl, "Jugar", "juego");
    this.botonReiniciar = new boton(this.botonX, this.botonY, this.botonAn, this.botonAl, "Reiniciar", "inicio");
    this.botonComenzar = new boton(this.botonX, height / 2, this.botonAn, this.botonAl, "Comenzar", "instrucciones");
    this.botonCreditos = new boton(this.botonX, this.botonY, this.botonAn, this.botonAl, "Créditos", "creditos");
    
    if (pantallaActual === "juego"){
    this.dibujar();
    }
  }

  cambiarPantalla() {
    if (this.pantallaActual === "ganar" || this.pantallaActual === "perder") {
      if (this.botonCreditos.diapoActual()) {
        this.reiniciarJuego();
        this.pantallaActual = "creditos";
      }
    }
  }

  crearPersonaje() {
    this.personaje = new personaje(width / 2, 465, pj);
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
  if (this.personaje.juegoTerminado) {
    pantallaActual = "perder"; 
  }else {
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
    objJuego.pantalla.mostrarPantalla(4);
    
    this.botonReiniciar.mostrar();
    this.personaje.juegoTerminado = false;
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

  iniciarMusica() {
    if (!cancionFondo.isPlaying()) {
      cancionFondo.loop();
    }
  }
  detenerMusica() {
    cancionFondo.stop();
  }
}

function mostrarInicio() {
  objJuego.pantalla.mostrarPantalla(0);
  objJuego.botonComenzar.mostrar();
}

function mostrarInstrucciones() {
  objJuego.pantalla.mostrarPantalla(1);
  objJuego.botonJugar.mostrar();
}

function mostrarJuego() {
  objJuego.pantalla.mostrarPantalla(2); 
  objJuego.dibujar(); 
}

function mostrarGanar() {
  objJuego.pantalla.mostrarPantalla(3); 
  objJuego.botonCreditos.mostrar();
}

function mostrarPerder() {
  objJuego.pantalla.mostrarPantalla(4); 
  objJuego.botonCreditos.mostrar();
}

function mostrarCreditos() {
  objJuego.pantalla.mostrarPantalla(5); 
  objJuego.botonReiniciar.mostrar();
}
