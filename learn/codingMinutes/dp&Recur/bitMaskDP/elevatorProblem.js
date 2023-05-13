

class Pair  {
  constructor (first, second) {
    this.first = first // number of rides
    this.second = second // weight of the ride
  }
}

const minTrips = (elevatorMaxWeight, weights) => {
  const N = weights.length // total ppl
  const dp = [...Array(1 << N)].fill(0).map(() => new Pair(Infinity, 0))

  dp[0].first = 1
  dp[0].second = 0

  for (let mask = 0; mask < (1 << N); mask++) {
    for (let p = 0; p < N; p++) {
      // p is coming in the mask, wanna place in the elevator
      if ((mask >> p) & 1) {
        
        // find the mask where ppl is not present
        let new_mask = mask ^ (1 << p)
        let new_option = new Pair(dp[new_mask].first, dp[new_mask].second)
        
        // include this ppl
        if (new_option.second + weights[p] <= elevatorMaxWeight) {
          new_option.first = new_option.first
          new_option.second = new_option.second + weights[p]
        } else {
          // exclude this ppl
          new_option.first = new_option.first + 1
          new_option.second = weights[p]
        }

        // updating dp[mask]
        if (dp[mask].first > new_option.first) {
          dp[mask].first = new_option.first
          dp[mask].second = new_option.second
        }
      }
    }
  }
  return dp[(1 << N) - 1].first
}


const main = () => {
  const elevatorMaxWeight = 10
  const weights = [2, 3, 3, 5, 6]
  console.log('The minimum trips to reach move all is ', minTrips(elevatorMaxWeight, weights))
}

main()
