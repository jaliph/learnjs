

const SOS = () => {
  // let each number have values as its own representation
  let t = 3
  let dp = Array(1<<t).fill(1)
  // for (let i = 0; i < t; i++) {
  //   dp[i] = 1
  // }

  // each i in dp represents its own value
  for (let bit = 0; bit < t; bit++) {
    for (let mask = 0; mask < (1 << t); mask++) {
      // if in the mask bit is present
      if ((mask >> bit) & 1) {
        // add what nt in the mask + with this bit's value
        dp[mask] = dp[mask] + dp[mask ^ (1 << bit)]
      }
    }
  }

  for (let i = 0; i < 1 << t; i++) {
    console.log(dp[i])
  }
}

const main = () => {
  SOS()
}

main()