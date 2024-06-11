// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge2 = function (nums1, m, nums2, n) {
  nums1 = nums1.slice(0, m)
  nums2 = nums2.slice(0, n)
  const mergeRecur = (arr1, arr2) => {
    if (!arr1 || arr1.length == 0) {
      return arr2
    }

    if (!arr2 || arr2.length == 0) {
      return arr1
    }

    // console.log('came in')
    const [hd1, ...rest1] = arr1
    const [hd2, ...rest2] = arr2

    if (hd1 < hd2) {
      return [hd1, ...mergeRecur(rest1, arr2)]
    } else {
      return [hd2, ...mergeRecur(arr1, rest2)]
    }
  }

  return mergeRecur(nums1, nums2)
}

const merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--]
  }
}

const main = () => {
  nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
  console.log('merged -> ', merge(nums1, m, nums2, n))

  nums1 = [1], m = 1, nums2 = [], n = 0
  console.log('merged -> ', merge(nums1, m, nums2, n))

  nums1 = [0], m = 0, nums2 = [1], n = 1
  console.log('merged -> ', merge(nums1, m, nums2, n))

  nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
  console.log('merged -> ', merge(nums1, m, nums2, n))
}

main()
