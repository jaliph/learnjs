// https://leetcode.com/problems/car-pooling/

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const carPooling = function (trips, capacity) {
  const timeline = {}

  let currentCapacity = 0
  for (const trip of trips) {
    const [cap, from, to] = trip
    timeline[from] = (timeline[from] || 0) + (cap)
    timeline[to] = (timeline[to] || 0) + (-cap)
  }

  const newTimeLine = Object.keys(timeline).sort().reduce(
    (obj, key) => {
      obj[key] = timeline[key]
      return obj
    },
    {}
  )

  for (const t in newTimeLine) {
    const cap = newTimeLine[t]
    currentCapacity += cap
    if (currentCapacity > capacity) {
      return false
    }
  }

  return true
}

const main = () => {
  trips = [[2, 1, 5], [3, 3, 7]], capacity = 4
  console.log('Is the trips possible ? ', carPooling(trips, capacity))

  trips = [[2, 1, 5], [3, 3, 7]], capacity = 5
  console.log('Is the trips possible ? ', carPooling(trips, capacity))
}

main()
