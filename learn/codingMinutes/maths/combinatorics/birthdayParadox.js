// https://www.geeksforgeeks.org/birthday-paradox/
// https://en.wikipedia.org/wiki/Birthday_problem

/*
How many people must be there in a room to make the probability 50% that at-least two people in the room have same birthday?

P(same) = 1 - P(diff)
P(diff) = 1 * 364/365 * 363

*/

const probability = (requiredProb) => {
  if (requiredProb == 100) {
    return 366
  }
  requiredProb = (requiredProb / 100)
  let prob = 1
  let num = 365
  let p = 0
  while (true) {
    if (prob < requiredProb) {
      break
    }
    prob = prob * (num / 365)
    num--
    p++
  }
  return p
}

const main = () => {
  p = 100
  console.log(`How many people must be there in a room to make the probability ${p}% that at-least two people in the room have same birthday?  `, probability(p))

  p = 50
  console.log(`How many people must be there in a room to make the probability ${p}% that at-least two people in the room have same birthday?  `, probability(p))

  p = 99.9
  console.log(`How many people must be there in a room to make the probability ${p}% that at-least two people in the room have same birthday?  `, probability(p))

  p = 99.9
  console.log(`How many people must be there in a room to make the probability ${p}% that at-least two people in the room have same birthday?  `, probability(p))
}

main()
