// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
const minTime = function (n, edges, hasApple) {
  const g = Array(n).fill(0).map(() => Array().fill([]))

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const DFS = (curr, par) => {
    let time = 0

    for (const n of g[curr]) {
      if (n != par) {
        const childtime = DFS(n, curr)
        if (childtime || hasApple[n]) {
          time += childtime + 2
        }
      }
    }

    return time
  }

  return DFS(0, -1)
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
const minTime2 = function (n, edges, hasApple) {
  const g = Array(n).fill(0).map(() => Array().fill([]))

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const DFS = (curr, par) => {
    let time = 0

    for (const n of g[curr]) {
      if (n != par) {
        const childtime = DFS(n, curr)
        if (childtime || hasApple[n]) {
          time += childtime + 2
        }
      }
    }

    return time
  }

  return DFS(0, -1)
}

const main = () => {
  n = 7, edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], hasApple = [false, false, true, false, true, true, false]
  console.log('Min time to pick the apples ', minTime(n, edges, hasApple))

  n = 7, edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], hasApple = [false, false, true, false, false, true, false]
  console.log('Min time to pick the apples ', minTime(n, edges, hasApple))

  n = 7, edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], hasApple = [false, true, false, false, false, false, false]
  console.log('Min time to pick the apples ', minTime(n, edges, hasApple))
}

main()
