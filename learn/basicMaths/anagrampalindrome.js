
const charFrequincy = (str) => {
  const char = []
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (char[str.charCodeAt(i) - 97]) {
      char[str.charCodeAt(i) - 97]++
    } else {
      char[str.charCodeAt(i) - 97] = 1
    }
  }
  console.dir(char)
}
charFrequincy('HelloWorld')
console.log('a'.charCodeAt(0))
console.log('A'.charCodeAt(0))

console.log()

// TODO Complete this
