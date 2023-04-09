// start processing user input
process.stdin.resume()
process.stdin.setEncoding('ascii')
// declare global variables
let inputStdin = ''
let inputStdinArray = ''
let inputCurrentline = 0
// standard input is stored into inputStdin
process.stdin.on('data', function (data) {
  inputStdin += data
})
// standard input is done and stored into an array
// then main is called so that you can start processing your data
process.stdin.on('end', function () {
  inputStdinArray = inputStdin.split('\n')
  main()
})
// reads a line from the standard input array
function readLine () {
  return inputStdinArray[inputCurrentline++]
}
/// //////////// ignore above this line ////////////////////
// your function that can assist you with solving a problem
function solveMeFirst (a, b) {
  // Hint: Type return a+b below

}

function main () {
  // write your code here.
  // call `readLine()` to read a line.
  // use console.log() to write to stdout
  const a = parseInt(readLine())
  const b = parseInt(readLine())
  const res = solveMeFirst(a, b)
  console.log(res)
}
