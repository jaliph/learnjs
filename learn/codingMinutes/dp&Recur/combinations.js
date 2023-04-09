
const combinations = (arr) => {

  const result = []
  const combinationRecur = (arr, i, set) => {
    // base case
    
    if (i === arr.length) {
      result.push(set)
    }

    if (i > arr.length) return

    // include i
    combinationRecur(arr, i + 1, [...set, arr[i]])
    // don't include i
    combinationRecur(arr, i + 1, [ ...set])
  }
  combinationRecur(arr, 0, [])
  return result
}


const combinationsIterate = (arr) => {

  let subsets = []
  
  // base case
  subsets.push([])

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i]
    let len = subsets.length
    // for every element present in subset, create a new one and push i
    for (let j = 0; j < len; j++) {
      let clone = subsets[j].slice(0)
      clone.push(curr)
      subsets.push(clone)
    }
  }
  return subsets

}

const arr = [1,2,3]
console.log('Combinations for ', arr , ' is ', combinations(arr))
console.log('Combinations for ', arr , ' is ', combinationsIterate(arr))