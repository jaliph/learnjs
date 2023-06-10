//  https://codeforces.com/problemset/problem/628/D

const MOD = 1e9 + 7

const solveMagicNums = (num, d, m) => {
  const str = num + ''
  const magicNumRecur = (index, last, sum_mod) => {
    // base
    if (index == str.length) {
      if (sum_mod == 0) {
        return 1
      }
      return 0
    }

    // recur
    const till = last ? Number(str[index]) : 9
    let ans = 0
    if (index % 2 == 1) {
      // even position
      if (d <= till) {
        ans += magicNumRecur(index + 1, last && (till == d), ((sum_mod * 10) + d) % m)
        // ans = ans % d
      }
    } else {
      // odd position
      for (let i = 0; i <= till; i++) {
        if (i == d) continue // don't count d at this position here
        ans += magicNumRecur(index + 1, last && (till == i), ((sum_mod * 10) + i) % m)
        // ans = ans % d
      }
    }

    return ans
  }

  return magicNumRecur(0, true, 0)
}

const main = () => {
  const lower = 10
  const higher = 99
  const magicNum = 6
  const multiple = 2
  console.log('The magic numbers in the range are ', (solveMagicNums(higher, magicNum, multiple) - solveMagicNums(lower - 1, magicNum, multiple)))
}

main()
