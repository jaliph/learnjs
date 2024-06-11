
/**
 * https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
const numWays = function (words, target) {
  const MOD = 10 ** 9 + 7
  const charFreq = Array(words[0].length).fill().map(() => Array(26).fill(0))
  for (const w of words) {
    for (const [i, c] of [...w].entries()) {
      charFreq[i][c.charCodeAt(0) - 97]++
    }
  }

  const dp = Array(target.length + 1).fill().map(() => Array(words[0].length + 1).fill(-1))
  // dp i = target's ith index, k each words index
  const numWaysRecur = (i, k) => {
    if (i === target.length) {
      return 1
    }

    if (k === words[0].length) {
      return 0
    }
    if (dp[i][k] != -1) {
      return dp[i][k]
    }

    const c = target[i].charCodeAt(0) - 97
    // dnt use the kth word / char
    dp[i][k] = numWaysRecur(i, k + 1)

    // use the kth word
    dp[i][k] = (dp[i][k] % MOD) + ((charFreq[k][c] * numWaysRecur(i + 1, k + 1)) % MOD)
    return dp[i][k] % MOD
  }
  return numWaysRecur(0, 0)
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  words = ['abba', 'baab'], target = 'bab'
  console.log('Num of ways target can be formed is ', numWays(words, target))

  words = ['acca', 'bbbb', 'caca'], target = 'aba'
  console.log('Num of ways target can be formed is ', numWays(words, target))
}

main()
