// https://leetcode.com/problems/integer-break/
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  const dp = {1 : 1}
  const breakRecur = (num) => {
    // base case
    if (dp[num]) {
      return dp[num]
    }    
    let res = n == num ? 0 : num
    for (let j = 1; j < num; j++) {
     let val = breakRecur(j) * breakRecur(num - j)
     console.log(val)
     res = Math.max(res, val)
    }
    return dp[num] = res
  }
  
  return breakRecur(n)
};

const main = () => {

}

main()