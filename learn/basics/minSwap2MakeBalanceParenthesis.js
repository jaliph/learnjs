// https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/


/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  let count = 0
  let max = 0
  for (let c of s) {
    if (c === '[') {
      count--
    } else {
      count++
    }
    max = Math.max(max, count)
  }
  
  return Math.floor((max + 1) / 2)
};


// do the swaps..
var minSwaps2 = function (orgString) {
  const str = orgString.split('');
  let balance = 0,
    swap = 0,
    lastPointer = str.length - 1;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === `[`) {
      balance++;
    } else {
      balance--;
    }
    if (balance < 0) {
      while (str[lastPointer] !== `[` && index < lastPointer) {
        lastPointer--;
      }
      const store = str[lastPointer];
      str[lastPointer] = str[index];
      str[index] = store;
      swap++;
      balance = 1;
    }
  }
  return swap;
};


const main = () => {
  s = "]]][[["
  console.log('min swaps to reorder them is ', minSwaps(s))

  s = "][]["
  console.log('min swaps to reorder them is ', minSwaps(s))
}

main()