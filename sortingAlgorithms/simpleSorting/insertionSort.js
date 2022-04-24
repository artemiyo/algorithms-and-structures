// Builds up the sort by gradually creating a larger left half which is always sorted

// 1. Start by picking the second element in the array
// 2. Now compare the second element with the one before it and swap if necessary
// 3. Continue to the next element and if it is in the incorrect order, iterate throught the sorted portion
// (i.e. the left side) to place the element in the correct place
// 4. Repeat until the array is sorted

// Data has to be nearly sorted for better performance

// Time Complexity - O(n^2) or O(n) - if array is nearly sorted
// Space Complexity - O(1)

// Useful when we try to add something new to the array constantly

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }

  return arr;
}


// while loop version
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    while((j > -1) && (currentValue < arr[j])) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue
  }

  return arr

}


console.log(insertionSort([2, 1, 9, 76, 4]));
