//Evaluacion Tema 1
const prompt = require("prompt-sync")();
const porc=0.15
class cooperativa{
    constructor(nombre,apellidos,rfc,direccion,telefono,hrsextra,cosextra){
        this._nombre=nombre;
        this._apellidos=apellidos;
        this._rfc=rfc;
        this._direccion=direccion;
        this._telefono=telefono;
        this._hrsextra=hrsextra;
        this._cosextra=cosextra;
        this._agregarEm=[];
        this._sueldo=0;
    }
    //setter
    //getter
AgregarEmp(){
    let tam=parseInt(prompt("Cantidad de empleado a dar:"))
    for(let i=0;i<tam;i++){
        this._nombre=prompt("ingresa el nombre del empleado:")
        this._hrsextra=parseInt(prompt("Numeros de horas trabajadas:"))
        this._cosextra=parseFloat(prompt("ingresa el costo por hora:"))
        let empleado={
            nombre:this._nombre,
            hrsextra:this._hrsextra,
            cosextra:this._cosextra,
            sueldo:this.calcularSueldo()
    }
    this._agregarEm.push(empleado);
    }

}
eliminarEmp(){
    this._agregarEm.length>0?this._agregarEm.pop():console.log("No hay registro que eliminar");
    

}
calcularSueldo() {
    if(this._hrsextra>8){
        this._sueldo=this._cosextra*this._hrsextra;
        return this._sueldo=this._sueldo+(this._cosextra*porc*(this._hrsextra-8))
    }else{
       return (this._sueldo=this._cosextra*this._hrsextra);
    }
}
mostrarEmpleados(){
    this._agregarEm.length>0?this._agregarEm.map((emp)=>{
        console.log(`El nombre es ${emp.nombre} y tiene un sueldo ${emp.sueldo}`);
    }):console.log("No hay empleados que mostrar");
}
menuLista(){
    let lista=parseInt(prompt("Que desea hacer: 1.Agregar, 2.Mostrar. 3.Eliminar, 4.Salir"))
    while (lista !=4) {
        switch(lista){
            case 1:
                this.AgregarEmp();
            case 2:
                this.mostrarEmpleados();
            case 3:
                this.eliminarEmp();
            case 4:
                 break;
            
        }
    }
}
}

let empleados=new cooperativa();
empleados.AgregarEmp();
empleados.mostrarEmpleados();
empleados.eliminarEmp();
//menuLista()