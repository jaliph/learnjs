var trapWater = function(height) {
  let left = 0
  let right = height.length - 1
  let lowMax = 0, highMax = 0
  let result = 0
  while (left <= right) {
    if (height[left] < height[right]) {
      if (height[left] > lowMax) {
        lowMax = height[left]
      } else {
        result += lowMax - height[left]
      }
      left++
    } else {
      if (height[right] > highMax) {
        highMax = height[right]
      } else {
        result += highMax - height[right]
      }
      right--
    }
  }
  return result
}

console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1]))