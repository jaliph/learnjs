

const _3sum = (arr) => {
  const n = arr.length
  arr.sort((a, b) => a - b)
  console.log(arr)
  let results = []
  for (let i = 0; i < n - 1; i++) {
    let j = i + 1
    let k = n - 1
    
    while (j < k) {
      console.log('Before', i, j, k, '|', arr[j], arr[k], arr[i], arr[j] + arr[k], arr[i])
      if (arr[j] + arr[k] === -arr[i]) {
        results.push([arr[i], arr[j], arr[k]])
        while (j < n - 1 && arr[j] === arr[j + 1]) j++
        while (k > 0 && arr[k] === arr[k - 1]) k--
        j++;
        k--
      } else if (arr[j] + arr[k] < -arr[i]) {
        while (j < n - 1 && arr[j] === arr[j + 1]) j++
        j++
      } else {
        while (k > 0 && arr[k] === arr[k - 1]) k--
        k--
      }
      console.log('After', i, j, k)
      while (i < n - 1 && arr[i] === arr[i + 1]) i++
    }
  }

  results.forEach(nums => nums.sort())
  return results
}

const nums = [-2,0,0,2,2]

console.log('Results --- > ', nums, _3sum(nums))