

// COunt the way to array 0s and 1s so that no cosecutive 1s exist in the string
const count = (n) => {
  const cRecur = (n, i, prevIdx_one) => {
    if (i === n + 1) {
      return 1 // base condition
    }

    let ans = 0
    // for 0 on ith Index
    ans += cRecur(n, i + 1, false)

    // for 1, if my prev index is 0 then only i can place 1
    if (prevIdx_one === false) {
      ans += cRecur(n, i + 1, true)
    }

    return ans
  }

  return cRecur(n, 0, false)
}


const main = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(`No of ways to placement for ${i}`, count(i))
  }
}

main()