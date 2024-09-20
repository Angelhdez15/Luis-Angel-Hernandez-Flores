//Regla sintatica de JS
class persona{
    constructor(nombre,apellido,edad,sexo,dirrecion,telefono,correo,horario){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._sexo=sexo;
        this._dirrecion=dirrecion;
        this._telefono=telefono;
        this._correo=correo;
        this._horario=horario
    }
}
class alumno extends persona {
    constructor(nombre,apellido,horario,matricula,carrera,semestre,) {
        super(nombre,apellido,horario);
        this._matricula=matricula;
        this._carrera=carrera;
        this._semestre=semestre;
    }
    mensaje(){
        console.log(`Soy el alumno ${this.nombre} y estudio la carrera de ${this.carrera}`);
        
    }
}
let Alumno=new alumno("Luis","Cambrano","Sistemas",3)
alumno=mensaje()
