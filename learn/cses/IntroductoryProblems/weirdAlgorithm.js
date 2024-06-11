const readline = require('readline')

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

r.on('line', function (line) {
  const vals = line.split(' ')
  weirdAlgo(parseInt(vals[0]))
})

const weirdAlgo = (n) => {
  const results = []
  const weirdALgoRecur = (n) => {
    results.push(n)
    if (n == 1) {
      return
    }
    if (n & 1 === 1) {
      weirdALgoRecur((n * 3) + 1)
    } else {
      weirdALgoRecur(n / 2)
    }
  }
  weirdALgoRecur(n)
  console.log(...results)
}
