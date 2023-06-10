
// https://leetcode.com/problems/course-schedule/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  const g = Array(numCourses).fill().map(() => Array().fill([]))

  for (e of prerequisites) {
    g[e[0]].push(e[1])
  }

  const detectCycle = (curr, par) => {
    visited[curr] = 1
    console.log(curr, par, visited)
    let ans = 0
    for (const n of g[curr] || []) {
      if (!visited[n]) {
        ans = ans | detectCycle(n, curr)
      } else if (visited[n] == 1) {
        return 1
      }
    }
    visited[curr] = 2
    return ans
  }

  const visited = []
  let ans = 0
  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      const result = detectCycle(i, -1)
      console.log(result)
      ans = ans | result
    }
  }

  return ans != 1
}

const main = () => {
  const numCourses = 2
  const prerequisites = [[0, 1], [1, 0]]

  console.log('Tell me if all the courses can be done ', canFinish(numCourses, prerequisites))
}

main()
