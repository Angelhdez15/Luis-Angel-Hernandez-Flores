const prompt=require(`prompt-sync`)();
/*let numero1;
let numero2;
numero1=parseInt(prompt("ingrese el numero 1"))
numero2=parseInt(prompt("ingrese el numero 2"))
console.log(numero1*numero2);

Realizar un programa que contenga un arreglo indefinido en que solicite a travez del teclado el tamaño 
y se ingrese por lo menos 4 valores de cualquier tipo, utilizando un ciclo para ingresar datos, imprimir los valores en pantalla
let arreglo=[]
function info(){
    const dimension=parseInt(prompt("ingresa el tamaño del arreglo:"))
    for (let i = 0; i < dimension; i++) {
        let datos =prompt("ingresa los datos:");
        //arreglo[i]=datos
        arreglo.push(datos)
    }
    arreglo.map((Data)=>{
        console.log(Data);
        
    })
 }
 info()*/
let arreglo=[]
let informacion;
const datos=()=>{
    const dimension=parseInt(prompt("ingresa el tamaño del arreglo:"))
    for (let i = 0; i < dimension; i++) {
        let nombre=prompt("ingresa tu nombre:");
        let edad=perseint(prompt("ingresa tu nombre:"));
        informacion={
            nombre,
            edad,
        };
        areglo.push(informacion)
}
arreglo.map((precioso)=>(
    console.log(`El nombre es ${precioso.nombre} y tiene ${precioso.edad}`)
    
));
console.log(arreglo);

};
datos()



