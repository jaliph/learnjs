const find_permutation = function (str, pattern) {
  // TODO: Write your code here
  const freqMap = [...pattern].reduce(function (acc, val) {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})

  let wStart = 0
  let matched = 0
  for (let wEnd = 0; wEnd < str.length; wEnd++) {
    const rightChar = str[wEnd]
    if (rightChar in freqMap) {
      freqMap[rightChar] -= 1
    }

    if (freqMap[rightChar] === 0) {
      matched += 1
    }

    if (matched === Object.keys(freqMap).length) {
      return true
    }

    if (wEnd >= pattern.length - 1) {
      leftChar = str[wStart]
      wStart += 1
      if (leftChar in freqMap) {
        if (freqMap[leftChar] === 0) {
          matched -= 1
        }
        freqMap[leftChar] += 1
      }
    }
  }
  console.dir(freqMap)
  return false
}

console.log(find_permutation('oidbcaf', 'abc'))
