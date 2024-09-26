//Sin recursividad
let arr= [64, 34, 25, 12, 22, 11, 90];
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp; 

      }
    }
  }
  return arr
}
const sortedArrayNonRecursive = bubbleSort(arr.slice());
console.log("Ordenado sin recursividad:", sortedArrayNonRecursive);

bubbleSort(arr)
//Con recursividad
function bubbleSortRecursive(arr, n = arr.length) {
  if (n === 1) return arr;

  for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
      }
  }

  return bubbleSortRecursive(arr, n - 1);
}
const sortedArrayRecursive = bubbleSortRecursive(arr.slice());
console.log("Ordenado con recursividad:", sortedArrayRecursive);
