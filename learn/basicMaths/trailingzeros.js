/*

Trailing 0s in n! = Count of 5s in prime factors of n!
                  = floor(n/5) + floor(n/25) + floor(n/125) + ....

*/

const trailingZero = (num) => {
  if (num < 0) {
    return -1
  }
  let count = 0

  let i = 5
  while ((num / i) >= 1) {
    count += ~~(num / i)
    i = i * 5
  }

  return count
}

console.log(trailingZero(200))
