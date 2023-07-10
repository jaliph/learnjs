// https://leetcode.com/problems/bulls-and-cows/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let map = new Map()
  let bulls = 0, cows = 0
  let done = new Set()
  for (let i in secret) {
    if (secret[i] == guess[i]) {
      bulls++
      done.add(i)
    } else {
      let ch = guess[i]
      map.set(ch, (map.get(ch) || 0) + 1)
    }
  }

  for (let i in secret) {
    if (done.has(i)) {
      continue
    }
    let ch = secret[i]
    if (map.has(ch)) {
      cows++
      map.set(ch, map.get(ch) - 1)
      if (map.get(ch) == 0) {
        map.delete(ch)
      }
    }
  }

  return bulls + 'A' + cows + 'B'
};

const main = () => {
  secret = "1807", guess = "7810"
  console.log('The hint is ', getHint(secret, guess))

  secret = "1123", guess = "0111"
  console.log('The hint is ', getHint(secret, guess))

  secret = "11", guess = "10"
  console.log('The hint is ', getHint(secret, guess))
}

main()