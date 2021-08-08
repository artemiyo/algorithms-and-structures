function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let obj = {};

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    obj[letter] = (obj[letter] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
