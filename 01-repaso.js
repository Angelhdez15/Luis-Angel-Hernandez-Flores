let A=(3,4,5,6);
function lectura() {
    for (let i=0; i<A.leght;i++) {
        let valores=A[i];
        console.log(`El valor del indice es${i}, y el dato es ${valores}`);
    }
}
lectura();