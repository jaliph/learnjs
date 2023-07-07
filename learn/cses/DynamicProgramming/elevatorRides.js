// https://cses.fi/problemset/task/1653

const readline = require('readline');

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


let i = 0
let N, maxElevatorWeight
let weights
r.on('line', function (line) {
  if (i++ === 0) {
    const vals = line.split(" ");
    N = parseInt(vals[0])
    maxElevatorWeight = parseInt(vals[1])
  } else {
    weights = line.split(' ').map(o => parseInt(o))
  }
});

r.on('close', function () {
  findMinRides(N, maxElevatorWeight, weights)
});


const findMinRides = (N, maxElevatorWeight, weights) => {
  class Pair {
    constructor(ride, weight) {
      this.ride = ride  /// minimise the rides
      this.weight = weight // weights = 0
    }
  }

  const dp = Array(1 << N).fill().map(() => new Pair(N, 0))
  dp[0].ride = 1
  dp[0].weight = 0

  // masks
  for (let mask = 0; mask < (1 << N); mask++) {
    // person
    for (let p = 0; p < N; p++) {
      // if p is present in mask
      if ((mask >> p) & 1) {
        // for the mask where p is not there
        let newMask = mask ^ (1 << p)
        let newPair = new Pair(dp[newMask].ride, dp[newMask].weight)

        if (newPair.weight + weights[p] <= maxElevatorWeight) {
          newPair.ride = newPair.ride
          newPair.weight = newPair.weight + weights[p]
        } else {
          newPair.ride = newPair.ride + 1
          newPair.weight = weights[p]
        }

        // console.log(newPair)

        if (newPair.ride == dp[mask].ride) {
          if (newPair.weight < newPair.weight) {
            dp[mask].ride = newPair.ride
            dp[mask].weight = newPair.weight
          }
        } else if (newPair.ride < dp[mask].ride) {
          dp[mask].ride = newPair.ride
          dp[mask].weight = newPair.weight
        }
      }
    }
  }

  console.log(dp[(1 << N) - 1].ride)
}