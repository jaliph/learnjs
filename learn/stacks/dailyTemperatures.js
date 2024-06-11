// https://leetcode.com/problems/daily-temperatures/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const stack = []

  const newArray = Array(temperatures.length).fill(0)
  for (const [i, t] of temperatures.entries()) {
    while (stack.length > 0 && stack[stack.length - 1][0] < t) {
      const [temp, index] = stack.pop()
      newArray[index] = i - index
    }
    stack.push([t, i])
  }

  return newArray
}

const main = () => {
  // temperatures = [73,74,75,71,69,72,76,73]
  // console.log('waiting days for warmer temperature ... ', dailyTemperatures(temperatures))

  // temperatures = [30,40,50,60]
  // console.log('waiting days for warmer temperature ... ', dailyTemperatures(temperatures))

  // temperatures = [30,60,90]
  // console.log('waiting days for warmer temperature ... ', dailyTemperatures(temperatures))

  temperatures = [55, 38, 53, 81, 61, 93, 97, 32, 43, 78]
  console.log('waiting days for warmer temperature ... ', dailyTemperatures(temperatures))
}

main()
