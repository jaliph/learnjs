
// https://leetcode.com/problems/curry/

// method - 1
var curry = function (fn) {
  let nums = []
  return function curried(...args) {
    nums = [...nums, ...args]
    if (fn.length == nums.length) {
      const res = fn(...nums)
      nums = []
      return res
    } else {
      return curried
    }
  }
}

// method - 2
var curry = function (fn) {
  return function curried(...args) {
    if (fn.length == args.length) {
      return fn(...args)
    } else {
      return function(...newArgs) {
        return curried(...args, ...newArgs)
      }
    }
  }
}

const sum = (a, b, c) => a + b + c

const csum = curry(sum)
// console.log(csum(1)(2))
console.log(csum(1, 2)(3))