
const jump = (nums = []) => {
  let steps = 0
  let currentJumpIndex = 0
  let nextJumpIndex = 0
  for (let i = 0; i < nums.length - 1; i++) {
    nextJumpIndex = Math.max(i + nums[i], nextJumpIndex)
    console.log(`Next Jump index at ${i} is ${nextJumpIndex} `)
    if (i === currentJumpIndex) {
      console.log("Jumped at ", currentJumpIndex)
      steps += 1
      currentJumpIndex = nextJumpIndex
    }
  }
  return steps
}

console.log(jump([2,3,0,1,4]))