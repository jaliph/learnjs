// https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
const findTheCity = function (n, edges, distanceThreshold) {
  const distance = Array(n).fill().map(() => Array(n).fill(Infinity))

  for (let i = 0; i < n; i++) {
    distance[i][i] = 0
  }

  for (const e of edges) {
    distance[e[0]][e[1]] = e[2]
    distance[e[1]][e[0]] = e[2]
  }

  Print2D(distance)

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i == j) {
          continue
        }
        distance[i][j] = Math.min(distance[i][j], distance[i][k] + distance[k][j])
      }
    }
  }

  let ans = 0
  const map = {}
  for (let i = 0; i < n; i++) {
    const city = i
    map[city] = 0
    for (let j = 0; j < n; j++) {
      if (i == j) {
        continue
      }
      if (distance[i][j] <= distanceThreshold) {
        map[city] = map[city] + 1
        // console.log(j, distanceThreshold, map[city])
      }
    }

    if (map[ans] >= map[city]) {
      // console.log(ans)
      ans = city
    }
  }

  // Print2D(distance)
  // console.log(map)
  // console.log(ans)
  // console.log("-".repeat(100))
  return ans
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  n = 4, edges = [[0, 1, 3], [1, 2, 1], [1, 3, 4], [2, 3, 1]], distanceThreshold = 4
  console.log('The city with the smallest neightbor is ', findTheCity(n, edges, distanceThreshold))

  n = 6, edges = [[0, 3, 7], [2, 4, 1], [0, 1, 5], [2, 3, 10], [1, 3, 6], [1, 2, 1]], distanceThreshold = 417
  console.log('The city with the smallest neightbor is ', findTheCity(n, edges, distanceThreshold))
}

main()
