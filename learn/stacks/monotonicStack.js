
const findMonotonicLengths = (nums) => {
  const res = []
  const stack = []

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      const index = stack.pop()
      res[index] = i - index
    }
    stack.push(i)
  }
  while (stack.length) {
    const index = stack.pop()
    res[index] = nums.length - index
  }
  console.log(res)
}

const main = () => {
  nums = [2, 8, 9, 10, 3, 1]
  findMonotonicLengths(nums)
}

main()
