// Given a binary string. We need to find the length of the longest balanced substring. A substring is balanced if it contains an equal number of 0 and 1.

// Examples:  

//     Input : input = 110101010
//     Output : Length of longest balanced sub string = 8

//     Input : input = 0000
//     Output : Length of longest balanced sub string = 0


const countLongestSubstring = (str) => {

  let m = new Map()

  m.set(0, -1)
  let count0 = 0
  let count1 = 0
  let result = 0
  let min = 0
  let max = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 1) {
      count1++
    } else {
      count0++
    }
    
    if (m.has(count1 - count0)) {
      if (result < i - m.get(count1 - count0)) {
        result = i - m.get(count1 - count0)
        max = i
        min = m.get(count1 - count0) + 1
        // console.log(max, min)
      }
    } else {
      m.set(count1 - count0, i)
    }
    console.log(i, count0, count1, count1 - count0)
  }
  console.log(m)
  console.log(str.substring(min, result))
  return result
}

console.log(countLongestSubstring('00001110011'))