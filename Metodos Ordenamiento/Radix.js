let arr=[170, 45, 75, 90, 802, 24, 2, 66];
//Sin recursividad
function getMax(arr) {
    return Math.max(...arr);
}

function countingSortForRadix(arr, exp) {
    const n = arr.length;
    const output = new Array(n);
    const count = new Array(10).fill(0);

    // Contar ocurrencias
    for (let i = 0; i < n; i++) {
        const index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    // Sumar las cuentas para posiciones
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    const max = getMax(arr);

    // Ordenar por cada dígito
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortForRadix(arr, exp);
    }
}
radixSort(arr);
console.log("Radix Sort sin recursividad:", arr);

//Con recursividad
function getMax(arr) {
    return Math.max(...arr);
}

function countingSortForRadix(arr, exp) {
    const n = arr.length;
    const output = new Array(n);
    const count = new Array(10).fill(0);

    // Contar ocurrencias
    for (let i = 0; i < n; i++) {
        const index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    // Sumar las cuentas para posiciones
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Construir el array de salida
    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    // Copiar el array de salida al original
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function recursiveRadixSort(arr, exp, max) {
    if (Math.floor(max / exp) <= 0) return;

    countingSortForRadix(arr, exp);
    recursiveRadixSort(arr, exp * 10, max);
}

function radixSort(arr) {
    const max = getMax(arr);
    recursiveRadixSort(arr, 1, max);
}
radixSort(arr);
console.log("Radix Sort con recursividad:", arr);