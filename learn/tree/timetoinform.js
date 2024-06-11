// https://leetcode.com/problems/time-needed-to-inform-all-employees/

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
const numOfMinutes = function (n, headID, manager, informTime) {
  const g = Array(n).fill().map(() => Array().fill([]))

  for (const [i, m] of manager.entries()) {
    if (m == -1) continue
    g[m].push(i)
  }

  let maxtime = 0

  const q = [[headID, informTime[headID]]]
  let k = 0
  while (k < q.length) {
    const [curr, time] = q[k++]
    maxtime = Math.max(maxtime, time)

    for (const reportee of g[curr]) {
      q.push([reportee, time + informTime[reportee]])
    }
  }

  return maxtime
}

const main = () => {
  n = 6, headID = 2, manager = [2, 2, -1, 2, 2, 2], informTime = [0, 0, 1, 0, 0, 0]
  console.log('Min time taken to inform every one is ', numOfMinutes(n, headID, manager, informTime))

  n = 1, headID = 0, manager = [-1], informTime = [0]
  console.log('Min time taken to inform every one is ', numOfMinutes(n, headID, manager, informTime))
}

main()
