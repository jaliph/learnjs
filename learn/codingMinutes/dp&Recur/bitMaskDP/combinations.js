
const combinations = (str) => {
  const len = str.length
  const n = 1 << len
  let res = []
  for (let i = 0; i < n; i++) {
    let s = ''
    for (let j = 1, pos = 1; j < n; j <<= 1, pos++) {
      if (i & j) {
        s += str[pos - 1]
      }
      // check setBit for j
      // if ((1 << j) & i) {
      //   if (str[j] == undefined) {
      //     console.log(i, j, 1<<j, str[j])
      //   }
      //   s += str[j]
      // }
    }
    res.push(s)
  }
  return res
}


const main = () => {
  console.log('All the combinations are ', combinations('akachan1'))
}

main()

