
const minElevatorRides = (N, maxWeight, weights) => {
  class Pair {
    constructor (rides, weights) {
      this.rides = rides
      this.weights = weights
    }
  }

  const dp = Array(1 << N).fill().map(() => new Pair(Infinity, 0))

  dp[0].rides = 1
  dp[0].weights = 0
  // dp[mask] =// rides / weights

  // for each mask
  for (let mask = 1; mask < (1 << N); mask++) {
    // for people
    for (let p = 0; p < weights.length; p++) {
      if ((mask >> p) & 1) {
        const newMask = mask ^ (1 << p)
        const newPair = new Pair(dp[newMask].rides, dp[newMask].weights)

        if (newPair.weights + weights[p] <= maxWeight) {
          newPair.rides = newPair.rides
          newPair.weights = newPair.weights + weights[p]
        } else {
          newPair.rides += 1
          newPair.weights = weights[p]
        }
        console.log(newPair)

        if (newPair.rides < dp[mask].rides) {
          dp[mask].rides = newPair.rides
          dp[mask].weights = newPair.weights
        }
      }
    }
  }

  return dp[(1 << N) - 1].rides
}

const main = () => {
  N = 4, maxWeight = 10, weights = [4, 8, 6, 1]
  console.log('Min rides to move all the people', minElevatorRides(N, maxWeight, weights))
}

main()
