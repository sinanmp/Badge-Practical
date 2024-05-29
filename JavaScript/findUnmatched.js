function findUnmatchedElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // Elements in arr1 but not in arr2
  const diff1 = arr1.filter(x => !set2.has(x));

  // Elements in arr2 but not in arr1
  const diff2 = arr2.filter(x => !set1.has(x));

  return diff1.concat(diff2);
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const unmatchedElements = findUnmatchedElements(array1, array2);

console.log(unmatchedElements); // Output: [1, 2, 3, 6, 7, 8]

