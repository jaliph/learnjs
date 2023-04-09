function insertAtBottom (stack, item) {
  if (stack.length == 0) {
    stack.push(item)
  } else {
    const temp = stack.pop()
    insertAtBottom(stack, item)
    stack.push(temp)
  }
}

function reverse (stack) {
  if (stack.length != 0) {
    const temp = stack.pop()
    reverse(stack)
    insertAtBottom(stack, temp)
  }
}

const arr = [1, 2, 3]

insertAtBottom(arr, 5)

console.log(arr)

console.log(reverse(arr))

console.log(arr)
