// http://www.geometer.org/mathcircles/catalan.pdf
// https://cp-algorithms.com/combinatorics/catalan-numbers.html#analytical-formula

/// 1...... i - 1, i, i + 1....... N
// ---- i - 1, i, N - i

const catalan = (num) => {
  if (num <= 1) {
    return 1
  }
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += catalan(i - 1) * catalan(num - i)
  }
  return sum
}

const catalanDP = (num) => {
  const dp = Array(num + 1).fill(0)
  dp[0] = dp[1] = 1
  for (let i = 2; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += (dp[j - 1] * dp[i - j])
    }
  }
  return dp[num]
}

const main = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i, ' has n catalan numbers ', catalan(i))
  }

  for (let i = 0; i < 10; i++) {
    console.log(i, ' has  catalan number ', catalanDP(i))
  }
}

main()
