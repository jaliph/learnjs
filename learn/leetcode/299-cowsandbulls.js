// https://leetcode.com/problems/bulls-and-cows/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function (secret, guess) {
  const map = new Map()
  let bulls = 0; let cows = 0
  const done = new Set()
  for (const i in secret) {
    if (secret[i] == guess[i]) {
      bulls++
      done.add(i)
    } else {
      const ch = guess[i]
      map.set(ch, (map.get(ch) || 0) + 1)
    }
  }

  for (const i in secret) {
    if (done.has(i)) {
      continue
    }
    const ch = secret[i]
    if (map.has(ch)) {
      cows++
      map.set(ch, map.get(ch) - 1)
      if (map.get(ch) == 0) {
        map.delete(ch)
      }
    }
  }

  return bulls + 'A' + cows + 'B'
}

const main = () => {
  secret = '1807', guess = '7810'
  console.log('The hint is ', getHint(secret, guess))

  secret = '1123', guess = '0111'
  console.log('The hint is ', getHint(secret, guess))

  secret = '11', guess = '10'
  console.log('The hint is ', getHint(secret, guess))
}

main()
