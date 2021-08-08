// It's combination of two things - mergin and sorting

// Time complexity - O(nlogN)
// Space complexity - O(n)

// MERGE FUNCTION IMPLEMENTATION

// 1. Create an empty array, take a look at the smallest values in each input array
// 2. While there are still values we haven't looked at...
// 2.1. If the value in the first array is smaller than the value in
// the second array, push the value in the first array into our results
// and move on to the next value in the first array

// 2.2. if the value in the first array is larger than the value in
// the second array, push the value in the second array into our results
// and move on to the next value in the second array

// 2.3. Once we exhaust one array, push in all remaining values from the other array

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSorting(arr) {
  if (arr.length <= 1) return arr;

  let midpoint = Math.floor(arr.length / 2);
  let left = mergeSorting(arr.slice(0, midpoint));
  let right = mergeSorting(arr.slice(midpoint));

  return merge(left, right);
}

mergeSorting([10, 24, 76, 73]);
