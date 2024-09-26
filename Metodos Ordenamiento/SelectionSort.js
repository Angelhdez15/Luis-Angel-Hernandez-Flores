//Con recursividad
let array2= [64, 25, 12, 22, 11];
function recursiveSelectionSort(arr, start = 0) {
    const n = arr.length;
    // Caso base: si hemos alcanzado el final del array
    if (start >= n - 1) {
        return arr;
    }

    let minIndex = start;
    for (let j = start + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    // Intercambiar el elemento mínimo encontrado con el primer elemento
    [arr[start], arr[minIndex]] = [arr[minIndex], arr[start]];

    // Llamada recursiva para el siguiente índice
    return recursiveSelectionSort(arr, start + 1);
}
const sortedArray2 = recursiveSelectionSort(array2);
console.log("Array ordenado (con recursividad):", sortedArray2);
//Sin recursividad
const array1 = [64, 25, 12, 22, 11];
function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
 // Intercambiar el elemento mínimo encontrado con el primer elemento
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}
const sortedArray1 = selectionSort(array1);
console.log("Array ordenado (sin recursividad):", sortedArray1);
