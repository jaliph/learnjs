// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length == 0) {
    return 0
  }
  
  if (needle.length > haystack.length) {
    return -1
  }

  let i = 0
  let j = 0

  while (i < haystack.length) {
    if (haystack[i] == needle[j]) {
      index = i
      while (haystack[i] == needle[j] && j < needle.length) {
        i++
        j++
      }
      if (j == needle.length) {
        return index
      } else {
        i = index + 1
        j = 0
      }
    } else {
      i++
    }
  }

  return -1
};

const main = () => {
  haystack = "sadbutsad", needle = "sad"

}

main()