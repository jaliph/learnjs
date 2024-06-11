const fibGenerator = function * () {
  let prev1 = 0
  let prev2 = 1
  while (true) {
    yield prev1
    const temp = prev1
    prev1 = prev2
    prev2 = prev1 + temp
  }
}

const gen = fibGenerator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
