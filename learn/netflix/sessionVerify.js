
const verify_session = (pu, po) => {
  if (pu.length != po.length) {
    return false
  }
  let j = 0
  let stack = []

  for (let i of pu)  {
    stack.push(i)
    while( stack.length > 0 && stack[stack.length - 1] == po[j]) {
      stack.pop()
      j++
    }
  }
  return stack.length === 0
} 


push_op = [1,2,3,4,5]
pop_op = [5,4,3,2,1]

if (verify_session(push_op, pop_op))
  console.log("Session Successful!")
else
  console.log("Session Faulty!")