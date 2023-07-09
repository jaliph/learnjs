// https://www.lintcode.com/problem/857/

const minWindow = (s, t) => {
  let i1 = 0
  let i2 = 0
  let substr = ''
  let len = Infinity

  while (i1 < s.length) {
    if (s[i1] == t[i2]) {
      i2++

      if (i2 === t.length) {
        let start = i1
        let end = i1
        // bring the matching point
        i2--
        while (i2 >= 0) {
          // console.log('stuck', i2)
          if (s[start] === t[i2]) {
            i2--
          }
          start--
        }
        start++
        
        if (end - start + 1 < len) {
          len = end - start + 1
          substr = s.slice(start, end + 1)
        }
        // console.log('Came here')
        i1 = start + 1
        i2 = 0
      }
      i1++
    } else {
      i1++
    }
  }

  return substr
}


const main = () => {
  // const str1 = [
  //   "abcdedeaqdweq",
  //   "abcdebdde",
  //   "fgrqsqsnodwmxzkzxwqegkndaa",
  //   "zxcvnhss",
  //   "alpha"
  // ];
  // const str2 = ["aqeq", "bde", "kzed", "css", "la"];

  // for (let i = 0; i < str1.length; i++) {
  //   console.log('min window of subsequence is ... ', minWindow(str1[i], str2[i]))
  // }

  str1 = 'abcdebdde', str2 = 'bde'
  console.log('min window of subsequence is ... ', minWindow(str1, str2))

  str1 = 'alpha', str2 = 'la'
  console.log('min window of subsequence is ... ', minWindow(str1, str2))  

}

main()
