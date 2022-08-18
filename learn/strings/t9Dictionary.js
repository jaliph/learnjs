
const letterCombinations = (digits = '') => {
  if (digits.length === 0) {
    return []
  }
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  const result = []
  const aux = (index = 0, current = '') => {
    if (index === digits.length) {
      result.push(current)
      return
    }

    map[digits[index]].forEach(c => aux(index + 1, current + c))
  }
  aux()
  return result
}


const letterCombinations3 = (digits = '') => {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  if (!digits.length) {
    return []
  }
  const aux = (index = 0, result = ['']) => {
    if (index >= digits.length) {
      return result
    }
    const next = map[digits[index]]
    const nextResult = []
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < next.length; j++) {
        nextResult.push(result[i] + next[j])
      }
    }
    return aux(index + 1, nextResult)
  }
  return aux()
}

const letterCombinations2 = (digits = '') => {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  if (!digits.length) {
    return []
  }
  let result = ['']
  let index = 0
  while (index < digits.length) {
    const next = map[digits[index]]
    const nextResult = []
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < next.length; j++) {
        nextResult.push(result[i] + next[j])
      }
    }
    result = nextResult
    index++
  }
  return result
}

console.log(letterCombinations('22'))