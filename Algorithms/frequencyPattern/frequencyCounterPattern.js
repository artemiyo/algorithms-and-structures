// Naive Solution (Time complexity - O^(n))

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
}

// Refactored version (Time complexity - O(n))

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounterOne = {};
  let frequencyCounterTwo = {};

  for (let val of arr1) {
    frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1;
  }

  for (let key in frequencyCounterOne) {
    if (!(key ** 2 in frequencyCounterTwo)) {
      return false;
    }

    if (frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key]) {
      return false;
    }
  }
  return true;
}
