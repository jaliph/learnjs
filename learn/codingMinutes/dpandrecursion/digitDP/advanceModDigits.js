/*
  Given a range of number [a, b] and a number k, find all the numbers which are divisible by k and sum of digits is divisible by k
*/

const advanceDigitsMod = (num, k) => {
  const str = num + ''
  const advanceDigitsModRecur = (index, last, sum_mod, sum_digit_mod) => {
    // base
    if (index == str.length) {
      if (sum_digit_mod == 0 && sum_mod == 0) {
        return 1 // such a number in the range should be counted in
      }
      return 0
    }

    // recur
    const till = last ? Number(str[index]) : 9
    let ans = 0
    for (let i = 0; i <= till; i++) {
      ans += advanceDigitsModRecur(index + 1,
        last && (till == i),
        ((sum_mod * 10) + i) % k, // formulating the actual number
        (sum_digit_mod + i) % k // sum of digits
      )
    }

    return ans
  }

  return advanceDigitsModRecur(0, true, 0, 0)
}

const main = () => {
  const lower = 1
  const higher = 20

  console.log('the count of such numbers in the range are', advanceDigitsMod(higher, 1) - advanceDigitsMod(lower - 1, 1))

  console.log('the count of such numbers in the range are', advanceDigitsMod(higher, 2) - advanceDigitsMod(lower - 1, 2))

  console.log('the count of such numbers in the range are', advanceDigitsMod(1000, 4) - advanceDigitsMod(1 - 1, 4))
}

main()
