// https://leetcode.com/problems/boats-to-save-people/
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b)
  let l = 0, r = people.length - 1

  let boats = 0
  while (l <= r) {
    let remain = limit - people[r]
    r--
    boats++
    if (l <= r && people[l] <= remain) {
      l++
    }
  }

  return boats
};


const main = () => {
  people = [1,2], limit = 3
  console.log('number of boats required is ', numRescueBoats(people, limit))
  
  people = [3,2,2,1], limit = 3
  console.log('number of boats required is ', numRescueBoats(people, limit))
}

main()