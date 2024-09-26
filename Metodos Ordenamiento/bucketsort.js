let arr = [24, 31, 56, 1, 2, 3, 4];
//sin recursividad
function bucketSort(arr) {
  if (arr.length === 0) return arr;
  const maxVal = Math.max(...arr);
  const minVal = Math.min(...arr);
  const bucketCount = Math.floor(maxVal - minVal) + 1;
  const buckets = Array.from({ length: bucketCount }, () => []);
  arr.forEach(num => {
    const bucketIndex = num - minVal;
    buckets[bucketIndex].push(num);
});
return buckets.reduce((sortedArray, bucket) => {
  return sortedArray.concat(bucket.sort((a, b) => a - b));
}, []);
}
const sortedArr = bucketSort(arr);
console.log("Ordenado sin recursividad:", sortedArr);

//con recursividad
function bucketSortRecursive(arr) {
  if (arr.length === 0) return arr;

  const maxVal = Math.max(...arr);
  const minVal = Math.min(...arr);
  const bucketCount = Math.floor(maxVal - minVal) + 1;
  const buckets = Array.from({ length: bucketCount }, () => []);

  arr.forEach(num => {
      const bucketIndex = num - minVal;
      buckets[bucketIndex].push(num);
  });
  const sortedBuckets = buckets.map(bucket => {
    return bucket.length > 0 ? bucketSortRecursive(bucket) : [];
});
return sortedBuckets.flat();
}
const sortedArrRecursive = bucketSortRecursive(arrRecursive);
console.log("Ordenado con recursividad:", sortedArrRecursive);