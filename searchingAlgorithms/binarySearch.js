// Binary search only works with sorted arrays

// Original Solution
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);

// String Search

function naiveSearch(long, short){
    let count = 0;
    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}


// BinarySearch strings;
function binarySearchString(arrStr, value) {
    let start = 0;
    let end = arrStr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (start <= end) {
        let res = value.localeCompare(arrStr[middle]);

        if(res === 0) return middle;

        if(res > 0) start = middle + 1
        else end = middle - 1

        middle = Math.floor((start + end) / 2);
    }

    return -1
};

console.log(binarySearchString(["contribute", "geeks", "ide", "practice"], "ide"));

console.log(naiveSearch("lorie loled", "lol"));
