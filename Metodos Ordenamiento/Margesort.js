//Con recursividad
const arrayToSort = [38, 27, 43, 3, 9, 82, 10];
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const sortedArray = mergeSort(arrayToSort);
console.log("Merge Sort Recursivo:", sortedArray);

//Sin recursividad
const arrayToSortNonRecursive = [38, 27, 43, 3, 9, 82, 10];
function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Intercambiar el elemento mínimo encontrado con el primer elemento
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}
const sortedArrayNonRecursive = selectionSort(arrayToSortNonRecursive);
console.log("Selection Sort No Recursivo:", sortedArrayNonRecursive);
