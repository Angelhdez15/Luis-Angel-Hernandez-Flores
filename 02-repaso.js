//Realizar un arreglo con 2 dimensiones y guardar 2 arreglos internos y dar lectura a los datos internos
let A=[[1,2,3],[4,5,6]]
const datosArreglos=()=>{
A.map((datos,index)=>{
    datos.map((i,valores)=>{
        console.log(`${i}=${valores}`);
    })
});
}
datosArreglos()
// Tarea hacer lo mismo de lo anterior usando los siguientes
//for of
let B=[[7,8,9],[1,2,3]]
for (let arreglo of B){
    for(let nuemros of arreglo){ 
        console.log(nuemros);
    }
}
//for in
let C=[[9,8,7],[6,5,4]]
for(let i in C){
    for (let elementos in C[1]){
        console.log(C[i][elementos]);
        
    }
}
//for each
let D=[[4,3,2],[1,5,6]]
D.forEach(Areglo=>{
    Areglo.forEach(elemto=>{
        console.log(elemto);
        
    })
})
//funcion flecha
let E=[[5,4,6],[8,7,9]]
let array=(wr)=>wr.flat();
console.log(array(E));

//while
let F=[[9,5,4],[6,2,1]]
let i=0
while(i<F.length){
    let segn=0
    while(segn<F[i].length){
        console.log(F[i][segn]);
        segn++
    }
    i++
}
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
datos();