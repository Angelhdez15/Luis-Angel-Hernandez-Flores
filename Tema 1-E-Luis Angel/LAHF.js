const prompt = require("prompt-sync")();

class Empleado {
    constructor(Nombre, Apellido, RFC, Direccion, Telefono) {
        this._nombre = Nombre;
        this._apellido = Apellido;
        this._rfc = RFC;
        this._direccion = Direccion;
        this._telefono = Telefono;
        this._salarioBase = 300; 
    }
    set nombre(Nombre) {
        this._nombre = Nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set apellido(Apellido) {
        this._apellido = Apellido;
    }

    get apellido() {
        return this._apellido;
    }

    set rfc(RFC) {
        this._rfc = RFC;
    }

    get rfc() {
        return this._rfc;
    }

    set direccion(Direccion) {
        this._direccion = Direccion;
    }

    get direccion() {
        return this._direccion;
    }

    set telefono(Telefono) {
        this._telefono = Telefono;
    }

    get telefono() {
        return this._telefono;
    }
    calcularSalario(horasTrabajadas) {
        let salario = this._salarioBase;
        if (horasTrabajadas > 8) {
            let porcentajeExtra = this._salarioBase * 0.15; 
            salario += porcentajeExtra;
        }
        return salario;
    }

    saluda(horasTrabajadas) {
        let salario = this.calcularSalario(horasTrabajadas);
console.log(`Hola ${this._nombre} ${this._apellido}, tus datos son:RFC: ${this._rfc}, TU Dirección donde vives es: ${this._direccion}, y tu Teléfono es: ${this._telefono}
        Has trabajado ${horasTrabajadas} horas y tu salario es: ${salario.toFixed(2)} pesos.`);
    }
    despedir(){
        console.log(`Hola ${this._nombre} ${this._apellido} te comunicamos que haz sido despedido`);
        
    }
}

let persona = () => {
    let contratar = parseInt(prompt("Cantidad de empleados nuevos para agregar: "));
    let empleados=[]
    for (let i = 0; i < contratar; i++) {
        let empleado = new Empleado();
        
        empleado.nombre = prompt("Ingrese el nombre: ");
        empleado.apellido = prompt("Ingrese el apellido: ");
        empleado.rfc = prompt("Ingrese su RFC: ");
        empleado.direccion = prompt("Ingrese su dirección: ");
        empleado.telefono = parseInt(prompt("Ingrese su número telefónico: "));
        let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas hoy: "));
        empleados.push(empleado)
        empleado.saluda(horasTrabajadas)
    }
    if (empleados.length > 0) {
        empleados[empleados.length - 1].despedir(); 
    }
}

persona();
