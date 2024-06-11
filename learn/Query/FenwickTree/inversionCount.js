
const findInversionCount = (arr) => {
  const inversionCounts = []

  const fn = Array(arr.length + 1).fill(0)

  const add = (i, val) => {
    i++
    while (i < fn.length) {
      fn[i] += val
      i += (i & -i)
    }
  }

  const sum = (l, r) => {
    const rangeSum = (i) => {
      i++
      let sum = 0
      while (i) {
        sum += fn[i]
        i -= (i & -i)
      }
      return sum
    }
    return rangeSum(r) - rangeSum(l - 1)
  }

  const pos = []
  for (let i = 0; i < arr.length; i++) {
    pos.push([arr[i], i])
  }

  pos.sort((a, b) => a[0] - b[0])

  for (const p of pos) {
    const rightSum = sum(p[1], arr.length - 1)
    inversionCounts[p[1]] = rightSum
    add(p[1], 1)
  }

  return inversionCounts
}

const main = () => {
  const nums = [5, 2, 4, 9, 1, 8, 3, 10, 6, 7]
  console.log('Inversion Counts are ', findInversionCount(nums))
}

main()
