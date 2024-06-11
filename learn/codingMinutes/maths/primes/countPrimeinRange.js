
// count primes in a range of two nums

const countPrimeinRange = (l, r) => {
  const bool = Array(r + 1).fill(true)

  bool[0] = false
  bool[1] = false

  for (let i = 2; i <= r; i++) {
    for (let j = i * i; j <= r; j += i) {
      if (bool[j]) {
        bool[j] = false
      }
    }
  }

  const prefix = Array(r + 1).fill(0)
  for (let i = 1; i <= r; i++) {
    if (bool[i]) {
      prefix[i] = prefix[i - 1] + 1
    } else {
      prefix[i] = prefix[i - 1]
    }
  }

  return prefix[r] - prefix[l] + 1
}

const main = () => {
  left = 5, right = 11
  console.log('Count of primes in this range is ', countPrimeinRange(left, right))
}

main()
