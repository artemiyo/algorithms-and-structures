const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
};

// 1. Define a function that accepts list of number;
// 2. Figure out how many digits the largest number has;
// 3. Loop from k = 0 up to this largest number of digits;
// 4.For each iteration of the loop:
// 4.1. Create buckets for each digit (0 to 9)
// 4.2. place each number in the corresponding bucket, based on its kth digit
// 5. Replace our exisitng array with values in our buckets, starting with 0 and going up to 9;
// 6. Return list at the end

// Time Complexity - O(nk)
// Space Complexity - O(n + k)

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
