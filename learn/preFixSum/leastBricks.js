// https://leetcode.com/problems/brick-wall/

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  let row = wall.length

  let cutMap = new Map()
  let max = -Infinity

  for (let row of wall) {
    for (let i = 1; i < row.length; i++) {
      row[i] = row[i] + row[i - 1]
    }

    for (let i = 0; i < row.length - 1; i++) {
      cutMap.set(row[i], (cutMap.get(row[i]) || 0) + 1)
      max = Math.max(max, cutMap.get(row[i]))
    }
  }


  // console.log(cutMap)
  // console.log(max)

  // Print2D(wall)

  return max === -Infinity ? wall.length : wall.length - max
};

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
  console.log('Min number of cuts in the bricks are', leastBricks(wall))

  wall = [[1],[1],[1]]
  console.log('Min number of cuts in the bricks are', leastBricks(wall))
}

main()