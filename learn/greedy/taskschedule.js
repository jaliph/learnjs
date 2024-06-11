// https://leetcode.com/problems/task-scheduler/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  const charMap = new Map()
  for (const i of tasks) {
    charMap.set(i, (charMap.get(i) ?? 0) + 1)
  }

  const sortedCount = Array.from(charMap.values).sort((a, b) => b - a)

  const maxValue = sortedCount[0]

  let idles = (maxValue - 1) * n
  for (let i = 1; i < sortedCount.length; i++) {
    idles -= Math.min(maxValue - 1, sortedCount[i])
  }
  return idles > 0 ? tasks.length + idles : tasks.length
}

const main = () => {
  tasks = ['A', 'A', 'A', 'B', 'B', 'B'], n = 2
  console.log('min time to complete the tasks', leastInterval(tasks, n))
}

main()
