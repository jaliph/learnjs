
const minSwaps = (nums) => {
  const m = []
  nums.forEach((e, i) => {
    m.push([e, i])
  })

  m.sort((a, b) => a[0] - b[0])
  // console.log(m)

  const visited = Array(nums.length).fill(false)
  let swaps = 0
  for (let i = 0; i < nums.length; i++) {
    // if already visted or index is already in its sorted position
    if (visited[i] === true || m[i][1] == i) {
      continue
    } else {
      let node = i
      let cycle = 0

      while (!visited[node]) {
        visited[node] = true

        // jump to the next position
        const nextNode = m[i][1]
        node = nextNode
        cycle++
      }
      // swap is -1 because we just need the swaps not the complete cycle.
      swaps += (cycle - 1)
    }
  }

  return swaps
}

console.log('Min Swaps need is', minSwaps([5, 4, 3, 2, 1]))
