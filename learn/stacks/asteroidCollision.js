// https://leetcode.com/problems/asteroid-collision/
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function (asteroids) {
  const stack = []

  for (const a of asteroids) {
    if (a > 0) {
      stack.push(a)
    } else {
      stack.push(a)
      while (stack.length > 1 && stack[stack.length - 1] < 0 && stack[stack.length - 2] > 0) {
        const neg = stack.pop()
        const pos = stack.pop()
        if (Math.abs(pos) === Math.abs(neg)) {
          continue
        } else if (Math.abs(pos) < Math.abs(neg)) {
          stack.push(neg)
        } else {
          stack.push(pos)
        }
      }
    }
  }
  return stack
}

const main = () => {
  asteroids = [5, 10, -5]
  console.log('Asteroid Collision result ', asteroidCollision(asteroids))

  asteroids = [8, -8]
  console.log('Asteroid Collision result ', asteroidCollision(asteroids))

  asteroids = [10, 2, -5]
  console.log('Asteroid Collision result ', asteroidCollision(asteroids))
}

main()
