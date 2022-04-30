const longest_substring_with_k_distinct = function(str, k) {
  // TODO: Write your code here
  let wStart = 0
  let freqMap = {}
  let maxLength = -Infinity
  for(let wEnd = 0; wEnd < str.length ; wEnd++) {
    let rightChar = str[wEnd]
    if (!(rightChar in freqMap)){
      freqMap[rightChar] = 0
    }
    freqMap[rightChar] ++
    while(Object.keys(freqMap).length > k) {
      let leftChar = str[wStart]
      freqMap[leftChar] --
      if (freqMap[leftChar] === 0) {
        delete freqMap[leftChar]
      }
      wStart++
    }
    maxLength = Math.max(maxLength, wEnd - wStart + 1)
  }
  return maxLength
};

console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);