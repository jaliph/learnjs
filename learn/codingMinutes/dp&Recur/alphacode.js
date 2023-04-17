


const alphacode = (str) => {
  const results = []
  const alphacodeRecur = (str, i, set) => {
    if (i === str.length) {
      results.push(set.join(''))
      console.log(results)
      return 1
    }
    
    let ans = 0
    if (str[i] >= '1' && str[i] <= '9') {
      ans += alphacodeRecur(str, i + 1, [...set, String.fromCharCode(Number(str[i]) + 64)])
    }

    if (i + 1 < str.length && str[i] == '1') {
      ans += alphacodeRecur(str, i + 2, [...set, String.fromCharCode(Number(str[i] + '' + str[i + 1]) + 64)])
    }

    if (i + 1 < str.length && (str[i] == '2' && str[i + 1] <= '6')) {
      ans += alphacodeRecur(str, i + 2, [...set, String.fromCharCode(Number(str[i] + '' + str[i + 1]) + 64)])
    }

    return ans
  }
  return alphacodeRecur(str, 0, [])
}

const main = () => {
  console.log('Count all possible encoding to its string form', alphacode('25114'))
  // console.log('Count all possible encoding to its string form', alphacode('1111111111'))
  // console.log('Count all possible encoding to its string form', alphacode('3333333333'))
}

main()