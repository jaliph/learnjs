// https://www.hackerrank.com/challenges/stone-division/problem

function stoneDivision (n, s) {
  const dp = {}
  const giveWL = (n, set) => {
    if (dp[n]) return dp[n]
    for (const i of set) {
      if (n % i == 0 && i % 2 == 0) {
        dp[n] = true
        return true
      }
    }

    for (const i of set) {
      if (n % i == 0 && giveWL(Math.floor(n / i), set) == false) {
        dp[n] = true
        return true
      }
    }

    dp[n] = false
    return dp[n]
  }

  return giveWL(n, s) ? 'First' : 'Second'
}

const main = () => {
  const stones = 15
  const set = [5, 2, 3]

  console.log('Is this winning position ', stoneDivision(stones, set) === true ? 'First' : 'Second')

  console.log('Is this winning position ', stoneDivision(718791247583033625, [3, 5, 17, 19, 23, 37]) === true ? 'First' : 'Second')
}

main()
