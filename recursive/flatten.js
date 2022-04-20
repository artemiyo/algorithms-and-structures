function flatten(arr) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) return [...result, ...flatten(arr[i])]
        else result.push(arr[i])
    }

    return result
}

flatten([1, 2, 3, [4, 5, 6, [7, 8, 9]]]) // [1,2,3,4,5,6,7,8,9]
