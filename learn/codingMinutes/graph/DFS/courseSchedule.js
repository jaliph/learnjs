
// https://leetcode.com/problems/course-schedule/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const g = Array(numCourses).fill().map(() => Array().fill([]))
  
  for (e of prerequisites) {
    g[e[0]].push(e[1])
  }

  const detectCycle = (curr, par) => {
    visited[curr] = 1
    console.log(curr, par, visited)
    let ans = 0
    for (let n of g[curr] || []) {
      if (!visited[n]) {
        ans = ans | detectCycle(n, curr)
      } else if (visited[n] == 1) {
        return 1
      }
    }
    visited[curr] = 2
    return ans
  }

  let visited = []
  let ans = 0
  for (let i= 0; i < numCourses; i++) {
    if (!visited[i]) {
      let result = detectCycle(i, -1)
      console.log(result)
      ans = ans | result
    }
  }

  return ans == 1 ? false : true
};

const main = () => {
  let numCourses = 2
  let prerequisites = [[0,1],[1,0]]

  console.log('Tell me if all the courses can be done ', canFinish(numCourses, prerequisites))
}


main()