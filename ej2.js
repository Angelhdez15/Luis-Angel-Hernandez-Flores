const prompt = require("prompt-sync")();
//Control de clientes
class cliente {
  constructor(Nomenbresia, nombre, direccion, telefono, estadoclien) {
    this._Nomenbresia = Nomenbresia;
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
    this._estadoclien = estadoclien;
    this._consulta = [];
  }

  RegistrarClin() {
    let cantidad = parseInt(prompt("Cantidad de personas a registrar:"));
    for (let i = 0; i < cantidad; i++) {
      this._nombre = prompt("ingresa tu nombre:");
      this._Nomenbresia = parseInt(prompt("ingresa tu numero de membresia:"));
      this._direccion = prompt("ingresa tu direccion:");
      this._telefono = parseInt(prompt("ingresa tu numero de telefono:"));
      this._estadoclien = prompt(
        `Estado del cliente: (1.Deudor), (2.Libre de multa)`
      );
      switch (parseInt(this._estadoclien)) {
        case 1:
          this._estadoclien = `Deudor`;
          console.log("El cliente debe ");
          break;
        case 2:
          this._estadoclien = `Libre de multa`;
          console.log("El cliente esta libre");
          break;
      }
      let datos = {
        nombre: this._nombre,
        Nomenbresia: this._Nomenbresia,
        direccion: this._direccion,
        telefono: this._telefono,
        estado: this._estadoclien,
      }
      this._consulta.push(datos);
    }
  }
  Eliminarclin() {
    for (let i = 0; i < this._consulta.length; i++) {
      if (this._consulta[i].estado === `Deudor`) {
        this._consulta.slice(i, 1);
        console.log(
          `El cliente ${this._consulta[i].nombre} ha sido dado de baja`
        );
      } else {
        console.log(`El cliente ${this._consulta[i].nombre} es libre`);
      }
    }
  }
}
//Control de peliculas
class cine extends cliente {
  constructor(Numero, Titulo, Clasificacion, Disponibilidad, tipos) {
    super();
    this._Numero = Numero;
    this._Titulo = Titulo;
    this._Clasicacion = Clasificacion;
    this._disponibilidad = Disponibilidad;
    this._tipos = tipos;
    this._Peliculas = [];
    this._Precio = 0;
  }
  RegistrarP() {
    let Peliculasss = parseInt(prompt("Cantidad de peliculas a registrar:"));
    for (let i = 0; i < Peliculasss; i++) {
      this._Numero = prompt("ingresa el numero de pelicula:");
      this._Titulo = prompt("ingresa el nombre o titulo de la pelicula:");
      this._Clasicacion = prompt("ingresa la clasificacion:");
      this._disponibilidad = prompt(
        `Estado de la pelicula: (1.Disponible), (2.Rentada)`
      );
      switch (parseInt(this._disponibilidad)) {
        case 1:
          this._disponibilidad = `Disponible`;
          break;
        case 2:
          this._disponibilidad = `Rentada`;
          break;
      }
      this._tipos = prompt("Tipo de pelicula: 1.Estreno, 2. Catalogo");
      switch (parseInt(this._tipos)) {
        case 1:
          this._tipos = `Estreno`;
          break;
        case 2:
          this._tipos = `Catalogo`;
          break;
      }
      let data = {
        Numero: this._Numero,
        Tipos: this._tipos,
        Clasificacion: this._Clasicacion,
        Disponibilidad: this._disponibilidad,
      };
      this._Peliculas.push(data);
    }
  }
  EleminarPelicula() {
    for (let i = 0; i < this._Peliculas.length; i++) {
      if (this._ConsultaP[i].estado === `Rentada`) {
        this._ConsultaP.slice(i, 1);
        console.log(`La pelicula ${this._ConsultaP[i].Titulo} ha sido rentada`);
      } else {
        console.log(`La pelicula ${this._ConsultaP[i].Titulo} esta disponible`);
      }
    }
  }
//  Control de rentas
  pelsd(titulo, verif) {
    let polis = this._Peliculas;
    let encontrada = null;
    for (let i = 0; i < polis.length; i++) {
      if (polis[i].Titulo === titulo) {
        encontrada = polis[i];
        break;
      }
    }
    if (encontrada) {
      if (encontrada.Disponibilidad === `Disponible`) {
        let deudorli = verif._consulta.some((cl) => cl.estado === `Deudor`);
        if (deudorli) {
          console.log("Salir de la deuda");
        } else {
          if (encontrada.tipo === `Estreno`) {
            this._Precio = 50;
          } else if (encontrada.tipo === `Catalogo`) {
            this._Precio = 35;
          }
          let fecha = prompt("ingresa la fecha cuando se rento:");
          let fecharenttada = new Date(fecha);
          let fechalim = this.calcularLimite(fecha);
          encontrada.Disponibilidad = `Rentada`;
          encontrada.fecha = fecha;
          encontrada.fechalim = fechalim;
          console.log(`La pelicula ${titulo} ha sido rentada`);
          console.log(`Fecha maxima de devolucion ${encontrada.fecha}`);
          console.log(`El Precio es de ${this._Precio} `);
        }
      } else {
        console.log(`Pelicula no disponible`);
      }
    }
  }
  calcularLimite(fecharenttada) {
    let fechaLime = new Date(fecharenttada);
    fechaLime.setDate(fechaLime.getDate() + 3);
    return fechaLime.toISOString().slice(0, 10);
  }
}
let clientes = new cliente();
clientes.RegistrarClin();
clientes.Eliminarclin();

let sao = new cine();
sao.RegistrarP;
let titulo = prompt("Ingresa el titulo de la pelicula que quisieras rentar");
let verif = clientes;
sao.pelsd(titulo, verif);
sao.EleminarPelicula();
