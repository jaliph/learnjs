// https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/

/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
const longestObstacleCourseAtEachPosition = function (obstacles) {
  const bucket = []
  const results = []
  const searchInsertPosition = (target) => {
    let l = 0
    let r = bucket.length
    let mid
    while (l < r) {
      mid = l + ~~((r - l) / 2)
      if (target >= bucket[mid]) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    return bucket[l] == target ? l + 1 : l
  }

  let idx
  for (const n of obstacles) {
    // console.log('Search, ', n, bucket)
    idx = searchInsertPosition(n)
    // console.log(idx)
    bucket[idx] = n
    results.push(idx + 1)
  }
  // console.log(bucket)
  return results
}

const main = () => {
  obstacles = [1, 2, 3, 1]
  console.log('Corrsesponding longes valid obstacles are .. ', longestObstacleCourseAtEachPosition(obstacles))

  obstacles = [3, 1, 5, 6, 4, 2]
  console.log('Corrsesponding longes valid obstacles are .. ', longestObstacleCourseAtEachPosition(obstacles))

  obstacles = [3, 1, 5, 6, 4, 2]
  console.log('Corrsesponding longes valid obstacles are .. ', longestObstacleCourseAtEachPosition(obstacles))

  obstacles = [5, 1, 5, 5, 1, 3, 4, 5, 1, 4]
  console.log('Corrsesponding longes valid obstacles are .. ', longestObstacleCourseAtEachPosition(obstacles))
}

main()
