// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  let charMap = new Map()

  const isOverlap = (str) => {
    let clone = new Map(charMap)
    for (let ch of str) {
      clone.set(ch, (clone.get(ch) || 0) + 1)
    }
    return Math.max(...clone.values()) > 1
  }

  const addSet = (str) => {
    for (let ch of str) {
      charMap.set(ch, (charMap.get(ch) || 0) + 1)
    }
  }

  const removeSet = (str) => {
    for (let ch of str) {
      charMap.set(ch, charMap.get(ch) - 1)
      if (charMap.get(ch) == 0) {
        charMap.delete(ch)
      }
    }
  }

  const checkCombinations = (i) => {
    if (i == arr.length) {
      return charMap.size
    }

    let res = 0
    if (!isOverlap(arr[i])) {
      console.log('no overlap' , arr[i], charMap)
      addSet(arr[i])
      console.log(charMap)
      res = checkCombinations(i + 1)
      removeSet(arr[i])
    }
    
    return Math.max(res, checkCombinations(i + 1))
  }
  
  return checkCombinations(0)
}

const main = () => {
  arr = ["un","iq","ue"]
  console.log('Max combo length is ', maxLength(arr))

  arr = ['aa', 'bb']
  console.log('Max combo length is ', maxLength(arr))
}

main()