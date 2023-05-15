// https://www.hackerrank.com/challenges/stone-division/problem



const giveWL = (n, set) => {
  for (let i of set) {
    if (n % i == 0 && i % 2 == 0) return true
  }

  for (let i of set) {
    if (n % i == 0 && giveWL(n/i, set) == false) return true
  }

  return false
}

const main = () => {
  const stones = 15
  const set = [5, 2, 3]

  console.log('Is this winning position ', giveWL(stones, set) === true ? 'First' : 'Second')

}

main()
