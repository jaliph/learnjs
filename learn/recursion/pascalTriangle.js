function printPascal (num) {
  if (num == 0) {
    return [1]
  } else {
    const lines = [1]

    /// recursion to go to basic levels
    const previous = printPascal(num - 1)

    // for each previous level, get the new nums in the lines
    for (let i = 0; i < previous.length - 1; i++) {
      lines.push(previous[i] + previous[i + 1])
    }

    // push the last line

    lines.push(1)
    return lines
  }
}

console.log(printPascal(5))
