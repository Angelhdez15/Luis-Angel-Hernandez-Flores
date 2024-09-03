// Definir clases con atributps dentro del constructor
class persona{
    contructor(nombre,edad,sexo,dirrecion){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
        this.dirrecion=dirrecion;
    }
// Metodo saludar
 saludar(){ //se deja de llamar funcion y ahora es metodo
console.log(`Hola${this.nombre}`);
    
}
//Encapsulamiento setter y getter
get nombre(){
    return this.nombre
}
set nombre (valores){
    this.nombre=valores;
}
}
let persona1=new persona("Dany",23,"M","Balancam");
persona1.nombe="jesus"
console.log(persona1);
persona1.saludar()
