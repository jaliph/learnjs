// https://www.codechef.com/problems/DECREM

const decreasingSeqExists = (L, R) => {
  if ((2 * L) <= R) {
    return -1
  } else {
    return R
  }
}

const main = () => {
  left = 4, right = 6
  console.log('Decreasing sequence exists ', decreasingSeqExists(left, right))
  left = 1, right = 2
  console.log('Decreasing sequence exists ', decreasingSeqExists(left, right))
}

main()