// https://leetcode.com/problems/simplify-path/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let stack = []

  let curr = ''
  for (let [i, ch] of [...path].entries()) {
    if (ch == '/') {
      if (curr === '..') {
        if (stack.length > 0) {
          stack.pop()
        }
      } else if (curr.length > 0 && curr !== '.') {
        stack.push(curr)
      }
      curr = ''
    } else {
      curr += ch
    }
  }

  // checking last curr
  if (curr.length > 0) {
    if (curr === '..') {
      if (stack.length > 0) {
        stack.pop()
      }
    } else if (curr.length > 0 && curr !== '.') {
      stack.push(curr)
    }
  }
  return '/' + stack.join('/')
};

const main = () => {
  path = "/..//home/"
  console.log('absolute path is ', simplifyPath(path))

  path = "/../abc//./def/"
  console.log('absolute path is ', simplifyPath(path))

  path = "/abc/.././def/"
  console.log('absolute path is ', simplifyPath(path))

  path = "/../"
  console.log('absolute path is ', simplifyPath(path))

  path = "/a//b////c/d//././/.."
  console.log('absolute path is ', simplifyPath(path))

  path = "/a/b"
  console.log('absolute path is ', simplifyPath(path))
}

main()