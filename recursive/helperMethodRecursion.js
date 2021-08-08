function collecOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
    console.log(helperInput)
  }
  helper(arr);

  return result;
}

collecOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
