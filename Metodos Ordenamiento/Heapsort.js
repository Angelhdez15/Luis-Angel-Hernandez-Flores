//Sin recursividad
function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}

const array = [12, 11, 13, 5, 6, 7];
heapSort(array);
console.log("Array ordenado (sin recursividad):", array);

//Con recusirvidad
function heapSortRecursive(arr) {
    const buildHeap = (arr, n, i) => {
        if (i >= n) return;
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            buildHeap(arr, n, largest);
        }
    };

    const sortHeap = (arr, n) => {
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            buildHeap(arr, n, i);
        }
        for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            buildHeap(arr, i, 0);
        }
    };

    sortHeap(arr, arr.length);
}

const arrayRecursive = [12, 11, 13, 5, 6, 7];
heapSortRecursive(arrayRecursive);
console.log("Array ordenado (con recursividad):", arrayRecursive);
