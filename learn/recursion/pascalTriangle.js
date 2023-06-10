function printPascal (num) {
  if (num == 0) {
    return [1]
  } else {
    const lines = [1]

    /// recursion to go to basic levels
    const previous = printPascal(num - 1)

    // console.log(previous)
    // for each previous level, get the new nums in the lines
    for (let i = 0; i < previous.length - 1; i++) {
      lines.push(previous[i] + previous[i + 1])
    }

    // push the last line

    lines.push(1)
    return lines
  }
}

// console.log(printPascal(5))

const pascalTriangleDp = (num) => {
  const dp = Array(num).fill(1)
  const result = []
  result.push(dp)
  for (j = num; j > 0; j--) { // run fot num times
    const prev = result[result.length - 1]
    const clone = prev.slice(1) // reduce the new length
    // console.log('Before')
    // console.log(prev)
    // console.dir(clone)
    for (let i = 0; i < clone.length; i++) {
      clone[i] = (clone[i - 1] || 0) + prev[i]
    }
    // console.dir(dp)
    // console.log('After')
    // console.dir(clone)
    result.push(clone)
  }

  console.log('final')
  Print2D(result)
}

const Print2D = arr => arr.forEach(o => console.log(...o))

pascalTriangleDp(10)
