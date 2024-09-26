//Con recursividad
let arr = [34, 7, 23, 32, 5, 62];
function quickSortRecursive(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortRecursive(left), pivot, ...quickSortRecursive(right)];
}
const sortedArrRecursive = quickSortRecursive(arr);
console.log('Arreglo ordenado (Recursivo):', sortedArrRecursive);

//Sin recursividad
function quickSortIter(arr) {
    if (arr.length <= 1) return arr;

    const stack = [[arr, 0, arr.length - 1]];
    const sorted = [];

    while (stack.length) {
        const [current, start, end] = stack.pop();

        if (start >= end) {
            continue;
        }

        const pivot = current[end];
        let partitionIndex = start;

        for (let i = start; i < end; i++) {
            if (current[i] < pivot) {
                [current[i], current[partitionIndex]] = [current[partitionIndex], current[i]];
                partitionIndex++;
            }
        }
        [current[partitionIndex], current[end]] = [current[end], current[partitionIndex]];

        stack.push([current, start, partitionIndex - 1]);
        stack.push([current, partitionIndex + 1, end]);
    }

    return arr;
}

const array = [34, 7, 23, 32, 5, 62];
const sortedArrayIter = quickSortIter(array);
console.log('Sorted array (Iterative):', sortedArrayIter);
