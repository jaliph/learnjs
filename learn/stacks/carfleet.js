// https://leetcode.com/problems/car-fleet/

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  let cars = []
  for (let [i,p] of position.entries()) {
    cars.push([p, speed[i]])
  }
  
  cars.sort((a, b) => a[0] - b[0])
  // console.log(cars)
  let stack = [] 

  let i = cars.length - 1

  for (let i = cars.length - 1; i >= 0 ; i--) {
    let timeToTarget = (target - cars[i][0]) / cars[i][1]
    stack.push(timeToTarget)
    if (stack.length > 1) {
      let prev1 = stack[stack.length - 1]
      let prev2 = stack[stack.length - 2]
      if (prev2 >= prev1) {
        stack.pop()
      }
    }
  }
    
  return stack.length
}

const main = () => {
  target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
  console.log('Number of fleets is ', carFleet(target, position, speed))

  target = 10, position = [3, 5, 7], speed = [3, 2, 1]
  console.log('Number of fleets is ', carFleet(target, position, speed))
}

main()