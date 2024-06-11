// https://leetcode.com/problems/open-the-lock/

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = function (deadends, target) {
  const visited = {}

  const set = (i) => {
    visited[i] = true
  }

  const has = (i) => {
    return visited[i]
  }

  for (const d of deadends) {
    set(d)
  }

  if (has('0000')) {
    return -1
  }

  const q = []
  q.push(['0000', 0])
  set('0000')

  const transform = (num) => {
    const results = []
    for (let i = 0; i < 4; i++) {
      const charChange1 = ((Number(num[i]) + 1) + 10) % 10
      const charChange2 = ((Number(num[i]) - 1) + 10) % 10
      results.push(num.slice(0, i) + charChange1 + num.slice(i + 1))
      results.push(num.slice(0, i) + charChange2 + num.slice(i + 1))
    }
    return results
  }

  let i = 0
  while (i < q.length) {
    const [curr, turn] = q[i++]

    if (curr == target) {
      return turn
    }
    for (const i of transform(curr)) {
      if (!has(i)) {
        set(i)
        q.push([i, turn + 1])
      }
    }
  }
  return -1
}

const main = () => {
  deadends = ['0201', '0101', '0102', '1212', '2002'], target = '0202'
  console.log(' no of steps to open the lock is ', openLock(deadends, target))

  deadends = ['8888'], target = '0009'
  console.log(' no of steps to open the lock is ', openLock(deadends, target))

  deadends = ['0000'], target = '9999'
  console.log(' no of steps to open the lock is ', openLock(deadends, target))
}

main()
