//Factory funtion
const persona1={
    nombre:"Dany",
    edad:23
}
const persona2={
    nombre:"jose",
    edad:25
}
function datospersona(nombre,edad){
    return{
        nombre,
        edad,
        active:true
    }
}
{
let persona1=datospersona("dany",24);
let persona2=datospersona("jose",25);
//console.log(persona1,persona2);

//camel case
const datosusario={
    nombre:"dany",
    edad:23,
    pasword:"12345",
    dirrecion:{
        colonia:"El carmen",
        caller:"principal",
        numext:123
    },
    sueldo:234.34,
    guardarusario:function(){
       // console.log("Guardar usuario...");
        
    }
} 
//datosusario.guardarusario();
}
//Add registros y parametros alos objetos definidos
const user={id:1};
user.nombre ="danyy"
user.guardaruser= function(){
    console.log("Guardar user...");
}
console.log(user);
user.guardaruser()

//objetos definidos
const person=Object.seal({id:1, nombre:"Dany"});
person.id=2;
person.nombre="juan"
person.edad=23
//console.log(person);

//pasar funciones con parametros
function pitbull(nombre){
    this._nombre=nombre;
}
function Animal(Fn,argumento){
    return new Fn(argumento)
}
let animal1=Animal(pitbull,"fidudays")
console.log(animal1);
