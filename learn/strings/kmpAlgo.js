//  https://leetcode.com/problems/implement-strstr


const strStr = (string, search) => {
  if (string.length == 0) return -1
  if (string.length < search.length) return -1

  let i = 0
  let j = 0
  let index = 0
  while (i < string.length) {
    if (string[i] == search[j]) {
      index = i

      while(string[i] == search[j] && j < search.length) {
        i++
        j++
      }

      if (j == search.length) return index
      else {
        i = index + 1
        j = 0
      }
    } else {
      i++
    }
  }

  return -1
}

console.log(strStr("hello", "ll"))
