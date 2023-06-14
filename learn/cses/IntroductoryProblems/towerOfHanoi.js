// https://cses.fi/problemset/task/2165

var readline = require('readline');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

r.on('line', function (line) {
    var vals = line.split(" ");
    TowerOfHanoi(parseInt(vals[0]))
});

const TowerOfHanoi = (n) => {
  let results = []
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
  let ans = TowerOfHanoi_Helper(n, 1, 2, 3, 0)
  console.log(ans)
  for (let step of results) {
    console.log(...step)
  }
}