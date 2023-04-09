function printCombinations(s) {
  let num = 1 << s.length
  // console.log(num)
  for (let i = 1; i < num; i++) {
    let value = i;
    let j, pos;
    let result = [];
    for (j = 1, pos = 1; j < num; j <<= 1, pos++) {
      if (i & j) {
        result.push(s[[pos - 1]]);
      }
    }
    console.log(result.join(""));
  }
}

printCombinations("abc");


const find_subsets = function(nums) {
  subsets = [];
  let len = 1 << nums.length
  for (let i = 0; i < len; i++) {
    let j, pos
    let temp = []
    for (j = 1, pos = 1; j < len ; j = j << 1, pos++ ) {
      if (i & j) {
        temp.push(nums[pos-1])
      }
    }
    subsets.push(temp)
  }
  return subsets;
};


console.log(`Here is the list of subsets: ${find_subsets([1, 3])}`)

// Wrong SOlution
const find_subsets2 = function(nums) {
  subsets = [];
  subsets.push([])
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i]
    let len = subsets.length
    for (let j = 0; j < len; j++) {
      let clone = subsets[j].slice(0)
      clone.push(currentNumber)
      subsets.push(clone)
    }
  }
  return subsets;
};

console.log(`Here is the list of subsets2:`)
console.dir(find_subsets2([1, 3, 4]))


// console.dir(find_subsets2(['a', 'b', 'c']))


// const combinations = (N) => {
//   let set = [[]]
//   let result = []
//   for (let i = 1 ; i <= N; i++) {
//     let len = set.length
//     for (let j = 0; j < len; j++) {
//       let clone = set[j].slice(0)
//       clone.push(i)
//       if (clone.length == 2) {
//         result.push(clone.slice(0))
//         continue
//       }
//       set.push(clone)
//     }
//   }
//   return result
// }

// console.log(combinations(20))


// const combinations2 = (arr, k) => {
//   let results = []
//   const combinationsRecur = (array, index, result) => {
//     if (result.length == k) {
//       results.push(result)
//       return
//     }
//     if (index >= array.length) {
//       return
//     }

//     combinationsRecur(array, index + 1, result) // if i is not selected
//     combinationsRecur(array, index + 1, [...result, array[index]]) // if i is selected
//     }
//   combinationsRecur(arr, 0, [])
//   return results
// }

// console.log(combinations2([1, 2, 3, 4], 2))

// const combine = function (arr, k) {
//   const result = []
//   const aux = (arr, index = 0, current = []) => {
//     if (current.length === k) {
//       result.push(current)
//       return
//     }
//     if (index >= arr.length) {
//       return
//     }
//     aux(arr, index + 1, [...current, arr[index]])
//     aux(arr, index + 1, current)
//   }
//   aux(arr)
//   return result
// }

// console.log(combine([1,2,3,4], 2))