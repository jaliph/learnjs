/**
 * https://leetcode.com/problems/count-vowels-permutation/
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  
  const dp = [[0,0,0,0,0], [1,1,1,1,1]]
  let a = 0, e = 1, i = 2, o = 3, u = 4

  const MOD = 10**9 + 7
  const moduloAdd = (...args) => {
    let total = 0
    for (let n of args) {
      total = ((total % MOD) + (n % MOD)) % MOD
    }
    return total
  }

  // dp [len][char] == ends with that char
  for (let j = 2; j <= n; j++) {
    dp.push([0, 0, 0, 0, 0])
    dp[j][a] = dp[j - 1][e]
    dp[j][e] = moduloAdd(dp[j - 1][a], dp[j - 1][i])
    dp[j][i] = moduloAdd(dp[j - 1][a], dp[j - 1][e], dp[j - 1][o], dp[j - 1][u])
    dp[j][o] = moduloAdd(dp[j - 1][i], dp[j - 1][u])
    dp[j][u] = dp[j - 1][a]
  }

  return dp[n].reduce((prev, curr) => moduloAdd(prev, curr), 0)
};


var countVowelPermutation = function(n) {
  if (n === 0) {
    return 0
  }
  const MOD = 10**9 + 7
  const moduloAdd = (...args) => {
    let total = 0
    for (let n of args) {
      total = ((total % MOD) + (n % MOD)) % MOD
    }
    return total
  }

  let prev = [1,1,1,1,1]
  let a = 0, e = 1, i = 2, o = 3, u = 4
  let curr
  // dp [len][char] == ends with that char
  for (let j = 2; j <= n; j++) {
    curr = Array(5).fill(0)
    curr[a] = prev[e]
    curr[e] = moduloAdd(prev[a], prev[i])
    curr[i] = moduloAdd(prev[a], prev[e], prev[o], prev[u])
    curr[o] = moduloAdd(prev[i], prev[u])
    curr[u] = prev[a]
    prev = curr
  }
  
  return prev.reduce((p, c) => moduloAdd(p, c), 0)
};

const main = () => {
  n = 1
  console.log('count of strs ', countVowelPermutation(n))

  n = 2
  console.log('count of strs ', countVowelPermutation(n))

  n = 5
  console.log('count of strs ', countVowelPermutation(n))
}

main()