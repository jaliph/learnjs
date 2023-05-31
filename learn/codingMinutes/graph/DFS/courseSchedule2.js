
// https://leetcode.com/problems/course-schedule-ii

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var findOrder = function(numCourses, prerequisites) {
  const g = Array(numCourses).fill().map(() => Array().fill([]))
  
  for (e of prerequisites) {
    g[e[0]].push(e[1])
  }

  let order = []

  const detectCycle = (curr, par) => {
    visited[curr] = 1
    let ans = 0
    for (let n of g[curr] || []) {
      if (!visited[n]) {
        ans = ans | detectCycle(n, curr)
      } else if (visited[n] == 1) {
        return 1
      }
    }
    visited[curr] = 2
    order.push(curr)
    return ans
  }

  let visited = []
  let ans = 0
  for (let i= 0; i < numCourses; i++) {
    if (!visited[i]) {
      let result = detectCycle(i, -1)
      ans = ans | result
    }
  }

  return ans == 1 ? [] : order
};

const main = () => {
  let numCourses = 4
  let prerequisites = [[1,0],[2,0],[3,1],[3,2]]

  console.log('Tell me if all the courses can be done ', findOrder(numCourses, prerequisites))

  numCourses = 2
  prerequisites = [[1,0]]
  console.log('Tell me if all the courses can be done ', findOrder(numCourses, prerequisites))

  numCourses = 1
  prerequisites = []
  console.log('Tell me if all the courses can be done ', findOrder(numCourses, prerequisites))
}


main()