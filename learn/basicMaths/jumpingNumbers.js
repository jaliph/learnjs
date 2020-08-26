// BFS Implementation
const jumpingNumbers = (num, start) => {
  const queue = []
  queue.push(start)
  while (queue.length > 0) {
    const current = queue.pop()
    if (current <= num) {
      console.log(current)
      const lastDigit = current % 10
      if (lastDigit === 0) {
        queue.push((current * 10) + (lastDigit + 1))
      } else if (lastDigit === 9) {
        queue.push((current * 10) + (lastDigit - 1))
      } else {
        queue.push((current * 10) + (lastDigit + 1))
        queue.push((current * 10) + (lastDigit - 1))
      }
    }
  }
}

// DFS Implememtation
const jumpingNumbersDFS = (num, start) => {
  DFSUtil(num, start)
}

const DFSUtil = (num, current) => {
  if (current <= num) {
    console.log(current)
    const ld = current % 10
    if (ld === 0) {
      DFSUtil(num, (current * 10) + (ld + 1))
    } else if (ld === 9) {
      DFSUtil(num, (current * 10) + (ld - 1))
    } else {
      DFSUtil(num, (current * 10) + (ld + 1))
      DFSUtil(num, (current * 10) + (ld - 1))
    }
  }
}

const getAllJumpingNumbers = (end, start) => {
  let ld = start % 10
  for (let i = ld; i <= 9 && i <= end; i++) {
    jumpingNumbers(end, (Math.floor(start / 10) * 10) +  i)
  }
}

getAllJumpingNumbers(2500, 12)

// TODO Sorted

