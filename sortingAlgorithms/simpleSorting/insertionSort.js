// Builds up the sort by gradually creating a larger left half which is always sorted

// 1. Start by picking the second element in the array
// 2. Now compare the second element with the one before it and swap if necessary
// 3. Continue to the next element and if it is in the incorrect order, iterate throught the sorted portion
// (i.e. the left side) to place the element in the correct place
// 4. Repeat until the array is sorted

// Data has to be nearly sorted for better performance

function insertonSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }

  return arr;
}

insertonSort([2, 1, 9, 76, 4]);
