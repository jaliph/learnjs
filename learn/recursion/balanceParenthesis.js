function balanced (arr, startIndex = 0, currentIndex = 0) {
  if (startIndex === arr.length) {
    return currentIndex === 0
  }
  if (arr[startIndex] == '(') {
    return balanced(arr, startIndex + 1, currentIndex + 1)
  }
  if (arr[startIndex] == ')') {
    return balanced(arr, startIndex + 1, currentIndex - 1)
  }
  return false
}

console.log(balanced(['(', '(', '(', '(', ')', ')'], 0, 0))

console.log(balanced([')', ')', '(', '('], 0, 0))
