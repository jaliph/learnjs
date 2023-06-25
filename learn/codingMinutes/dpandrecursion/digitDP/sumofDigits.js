
const sumofDigits = (str) => {
  str = str + ''
  const sumFDigitsRecur = (index, last, sum) => {
    // base
    if (index == str.length) {
      return sum
    }

    // recur
    const till = last ? Number(str[index]) : 9
    let ans = 0
    for (let i = 0; i <= till; i++) {
      ans += sumFDigitsRecur(index + 1, last && (till == i), sum + i)
    }

    return ans
  }

  return sumFDigitsRecur(0, true, 0)
}

const main = () => {
  let lowerRange = 1
  let higherRange = 10

  console.log('Sum of digits between the ranges are ', sumofDigits(higherRange) - sumofDigits(lowerRange - 1))

  lowerRange = 100
  higherRange = 777

  console.log('Sum of digits between the ranges are ', sumofDigits(higherRange) - sumofDigits(lowerRange - 1))
}

main()
