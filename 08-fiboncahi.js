/*function Fibo(n){
    let arr=[0,1];
    for (let i=2;i<n;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr
}
console.log(Fibo(6))*/ 

/*function fibonachi(n){
    let inicial=0
    let temporal=1
    let actual=0
    for (i=2;i<n;i++){
        inicial=temporal
        actual=temporal+inicial
        console.log(actual);
    }
}
fibonachi(6)*/

function fibo(n){
    if (n<0){
        return 
    } else if (n<2){
        return n
    } else{
        return fibo(n-1)+fibo(n-2)
    }  
}
for(let i=0; i<6;i++){
    console.log(fibo(i));
    
}
