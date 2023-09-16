// https://leetcode.com/problems/course-schedule-iv/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const g = Array(numCourses).fill().map(() => Array().fill([]))
  const gr = Array(numCourses).fill().map(() => Array().fill([]))

  const parents = Array(numCourses).fill().map(() => new Set())
  const indegree = Array(numCourses).fill(0)

  for (const e of prerequisites) {
    g[e[0]].push(e[1])
    gr[e[1]].push(e[0])
    indegree[e[1]]++
  }

  const q = []
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] == 0) q.push(i)
  }
  while (q.length > 0) {
    const curr = q.shift()
    // console.log('visiting, ', curr)
    for (const n of g[curr]) {
      indegree[n]--
      if (indegree[n] == 0) {
        for (const prev of gr[n]) {
          // console.log(prev, parents[prev], 'are parents of ', n)
          for (const p of [prev, ...parents[prev]]) {
            parents[n].add(p)
          }
        }

        q.push(n)
      }
    }
  }

  // console.dir(parents)

  const responses = []
  for (const q of queries) {
    if (parents[q[1]].has(q[0])) {
      responses.push(true)
    } else {
      responses.push(false)
    }
  }
  return responses
}

const main = () => {
  numCourses = 2, prerequisites = [[1, 0]], queries = [[0, 1], [1, 0]]
  console.log('the result for all the queries is ', checkIfPrerequisite(numCourses, prerequisites, queries))

  numCourses = 5, prerequisites = [[0, 2], [3, 0], [1, 3], [4, 1]], queries = [[0, 1], [1, 0]]
  console.log('the result for all the queries is ', checkIfPrerequisite(numCourses, prerequisites, queries))

  numCourses = 4, prerequisites = [[2, 3], [2, 1], [0, 3], [0, 1]], queries = [[0, 1], [0, 3], [2, 3], [3, 0], [2, 0], [0, 2]]
  console.log('the result for all the queries is ', checkIfPrerequisite(numCourses, prerequisites, queries))
}

main()
