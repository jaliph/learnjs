

const find_permutations = function(nums) {
  result = [];
  let q = []
  q.push([])
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    let len = q.length 
    for (let j = 0; j < len; j++ ) {
      let old = q.shift()
      for (let p = 0; p <= old.length; p++) {
        let newV = old.slice(0)
        newV.splice(p, 0, current)
        if (newV.length == nums.length) {
          result.push(newV)
        } else {
          q.push(newV)  
        }
      }
    }
  }
  return result;
};


const find_permutations2 = function(nums) {
  let results = []
  let permutRecur = (arr, index, current) => {
    if (index ==  arr.length ) {
      results.push(current)
      return
    }
    for (let i = 0; i <= current.length ; i++) {
      let newValue = current.slice(0)
      newValue.splice(i, 0, nums[index])
      permutRecur(arr, index + 1, newValue)
    }
  }
  permutRecur(nums, 0, [])
  return results
};



console.dir(`Here are all the permutations: ${find_permutations2([1, 3, 5])}`)
