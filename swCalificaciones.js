class alumnos{
    constructor(nombre,Nocontrol){
        this._nombre=nombre
        this._nocontrol=Nocontrol
    }
}
class maestros{
    constructor(nombrre){
        this._nombre=nombrre
    }
}
class asignatura{
    constructor(nombree,maestro){
        this._nombre=nombree
        this._maestro=maestro
    }
}
class calif extends alumnos{
    constructor(nombre,Nocontrol,asignatura,calif){
        super(nombre,Nocontrol)
        this._asignatura=asignatura
        this._calificaciones=calif
    }
    Promediar(){
        const final=this._calificaciones.reduce((sao,finn) => sao+finn,0)
        return final/this._calificaciones.length.toFixed(2)
    }
    vizualzar(){
        console.log(`Numero de Control: ${this._nocontrol}`);
        console.log(`Almno: ${this._nombre}`);
        console.log(`Materia: ${this._asignatura._nombre}`);
        console.log(`Maestro: ${this._asignatura._maestro._nombre}`);
        console.log(`Calificacion: ${this._calificaciones.join(", ")}`);
        console.log(`Promedio:${this.Promediar()}`);
        console.log(`-----------------------`);
    }
}
const maestro1=new maestros(`Jose`)
const maestro2=new maestros(`Pedro`)
const maestro3=new maestros(`Juan`)
const mate=new asignatura(`Matematicas`,maestro1)
const fisica=new asignatura(`Fisica`,maestro2)
const program=new asignatura(`Programacion`,maestro3)
const dany1=new calif("Dany","23E20090",mate,[90,95])
const dany2=new calif("Dany","23E20090",fisica,[85,75])
const dany3=new calif("Dany","23E20090",program,[30,30])
const Luis1=new calif('Luis',"23E20130",mate,[75,85])
const Luis2=new calif('Luis',"23E20130",fisica,[70,30])
const Luis3=new calif('Luis',"23E20130",program,[75,90])
dany1.vizualzar()
dany2.vizualzar()
dany3.vizualzar()