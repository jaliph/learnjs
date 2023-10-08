var minOperations = function(s1, s2, x) {
  let diff = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i] ) {
      diff++
    }
  }

  if (diff & 1) {
    return -1
  }

  console.log(diff)
  let cost = 0
  for (let i = 0; i < s1.length - 1; i++) {
    if (s1[i] != s2[i] && s1[i+1] != s2[i + 1]) {
      diff = diff - 2
      cost++
    }
  }
  console.log(diff, cost)

  cost += ~~(diff / 2) * x
  return cost
};

const main = () => {
  s1 = "1100011000", s2 = "0101001010", x = 2
  console.log(minOperations(s1, s2, x))
  // s1 = "10110", s2 = "00011", x = 4
  // console.log(minOperations(s1, s2, x))
  s1 = "101101", s2 = "000000", x = 6
  console.log(minOperations(s1, s2, x))
}

main()

// 1100011000
// 0101001010