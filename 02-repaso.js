//Realizar un arreglo con 2 dimensiones y guardar 2 arreglos internos y dar lectura a los datos internos
let A=[[1,2,3],[4,5,6]]
const datosArreglos=()=>{
A.map((datos,index)=>{
    datos.map((i,valores)=>{
        console.log(`${i}=${valores}`);
    })
})
}
datosArreglos()
// Tarea hacer lo mismo de lo anterior usando los siguientes
//for of
//for in
//for each
//funcion flecha
//while
//Estructura de control parser
let a=4;
let b=5;
function datos(){
if (A>b){
    console.log(`La a es mayor ${a}`);
}else{
    console.log(`La b es mayor ${b}`);
}}
const comparar=a>b?"A es mayor":"B es mayor";
console.log(comparar);