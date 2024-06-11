// https://cses.fi/problemset/task/2165

const readline = require('readline')

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

r.on('line', function (line) {
  const vals = line.split(' ')
  TowerOfHanoi(parseInt(vals[0]))
})

const TowerOfHanoi = (n) => {
  const results = []
  const TowerOfHanoi_Helper = (n, from, helper, to, count) => {
    if (n === 0) {
      return 0
    }
    count = TowerOfHanoi_Helper(n - 1, from, to, helper, count)
    results.push([from, to])
    count++
    count += TowerOfHanoi_Helper(n - 1, helper, from, to, count)
    return count
  }
  const ans = TowerOfHanoi_Helper(n, 1, 2, 3, 0)
  console.log(ans)
  for (const step of results) {
    console.log(...step)
  }
}
