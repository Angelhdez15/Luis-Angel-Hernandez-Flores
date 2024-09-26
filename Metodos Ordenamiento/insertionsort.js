//Con recursividad
const arrayRecursive = [5, 2, 9, 1, 5, 6];
function recursiveInsertionSort(arr, n) {
    if (n <= 1) {
        return;
    }
    // Ordenar los primeros n-1 elementos
    recursiveInsertionSort(arr, n - 1);

    // Insertar el último elemento en su lugar correcto
    let key = arr[n - 1];
    let j = n - 2;
    // Mueve los elementos de arr[0..n-2] que son mayores que key
    // a una posición adelante de su posición actual
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
}
recursiveInsertionSort(arrayRecursive, arrayRecursive.length);
console.log("Ordenado (con recursividad):", arrayRecursive);

//Sin recursividad
const array = [5, 2, 9, 1, 5, 6];
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
// Mueve los elementos de arr[0..i-1] que son mayores que key
// a una posición adelante de su posición actual
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log("Ordenado (sin recursividad):", insertionSort(array));
