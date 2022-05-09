// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted

// Time Complexity - O(nlogN)
// Space Complexity - O(logN)


function quickSort(arr) {

    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (const el of arr.slice(0, arr.length - 1)) {
        el < pivot ? left.push(el) : right.push(el)
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
