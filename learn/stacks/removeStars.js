// https://leetcode.com/problems/removing-stars-from-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  let stack = []
  for (let c of s) {
    if (c === '*') {
      if (stack.length === 0) {
        continue
      } else {
        stack.pop()
      }
    } else {
      stack.push(c)
    }
  }
  return stack.join('')
};

const main = () => {
  s = "leet**cod*e"
  console.log('after removal ', removeStars(s))

  s = "erase*****"
  console.log('after removal ', removeStars(s))
}

main()