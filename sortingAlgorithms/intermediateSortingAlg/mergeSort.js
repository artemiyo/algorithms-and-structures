// It's a combination of two things - merge and sorting

// Time complexity - O(nlogN)
// Space complexity - O(n)

// MERGE FUNCTION IMPLEMENTATION

// 1.
// Create an empty array, take a look at the smallest values in each input array
// 2.
// While there are still values we haven't looked at...
//// 2.1.
//// If the value in the first array is smaller than the value in
//// the second array, push the value in the first array into our results
//// and move on to the next value in the first array

// 2.2.
// if the value in the first array is larger than the value in
// the second array, push the value in the second array into our results
// and move on to the next value in the second array

function merge(left, right) {
  let sortedArr = [];

  while(left.length && right.length) {

    if(left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }

  return [...sortedArr, ...left, ...right]
}

function mergeSorting(arr) {
  const half = arr.length / 2;

  if(arr.length <= 1) return arr;

  const left = arr.splice(0, half);
  const right = arr;



  return merge(mergeSorting(left), mergeSorting(right))
}

mergeSorting([10, 24, 76, 73, 9]) // [9, 10, 24, 73, 76];
mergeSorting([5, 2, 4, 3, 1]) // [1, 2, 3, 4, 5]
