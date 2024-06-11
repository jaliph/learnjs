// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const total = nums1.length + nums2.length
  const half = ~~(total / 2)

  if (nums2.length < nums1.length) {
    [nums1, nums2] = [nums2, nums1]
  }

  let l = 0; let r = nums1.length - 1
  let i, j
  let ALeft
  let BLeft
  let ARight
  let BRight
  while (true) {
    i = l + Math.floor((r - l) / 2) // A
    j = half - (i + 1) - 1 // B

    // Calculate
    ALeft = (i >= 0) ? nums1[i] : -Infinity
    ARight = (i + 1) < nums1.length ? nums1[i + 1] : Infinity
    BLeft = (j >= 0) ? nums2[j] : -Infinity
    BRight = (j + 1) < nums2.length ? nums2[j + 1] : Infinity

    // partition is correct
    if (ALeft <= BRight && BLeft <= ARight) {
      // odd
      if (total & 1) {
        return Math.min(ARight, BRight)
      } else {
      // even
        return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2
      }
    } else if (ALeft > BRight) {
      // reduce the size of the first array
      r = i - 1
    } else {
      l = i + 1
    }
  }
}

const main = () => {
  nums1 = [2], nums2 = [1, 3]
  console.log('median of the array.. ', findMedianSortedArrays(nums1, nums2))

  // nums1 = [1,3], nums2 = [2, 4]
  // console.log('median of the array.. ', findMedianSortedArrays(nums1, nums2))
}

main()
