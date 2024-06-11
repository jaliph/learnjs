// https://leetcode.com/problems/next-greater-element-i/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
  const m = new Map()
  for (const i in nums1) {
    m[nums1[i]] = i
  }

  const stack = []
  const res = Array(nums1.length).fill(-1)

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length != 0 && nums2[stack[stack.length - 1]] < nums2[i]) {
      const j = stack.pop()

      if (m[nums2[j]]) {
        res[m[nums2[j]]] = nums2[i]
      }
    }
    stack.push(i)
  }

  while (stack.length) {
    const j = stack.pop()

    if (m[nums2[j]]) {
      res[m[nums2[j]]] = -1
    }
  }

  return res
}
