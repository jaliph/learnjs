var fibGenerator = function*() {
  let prev1 = 0
  let prev2 = 1
  while (true) {
    yield prev1
    let temp = prev1
    prev1 = prev2
    prev2 = prev1 + temp
  }
};

let gen = fibGenerator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())