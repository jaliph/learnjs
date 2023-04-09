
class MaxStack {
  constructor () {
    this.maxStack = []
    this.mainStack = []
  }

  push (value) {
    this.mainStack.push(value)
    if (this.maxStack.length === 0 || this.maxStack[0] < value) {
      this.maxStack.push(value)
    } else {
      this.maxStack.push(this.maxStack[this.maxStack.length - 1])
    }
  }

  pop (value) {
    this.maxStack.pop()
    return this.mainStack.pop()
  }

  maxRating () {
    if (this.maxStack.length > 0) return this.maxStack[this.maxStack.length - 1]
    else return null
  }
}

const ratings = new MaxStack()
ratings.push(5)
ratings.push(0)
ratings.push(2)
ratings.push(4)
ratings.push(6)
ratings.push(3)
ratings.push(10)

console.log(ratings.mainStack)
console.log('Maximum Rating: ' + ratings.maxRating())

ratings.pop() // Back button effect
console.log('\nAfter clicking back button\n')
console.log(ratings.mainStack)
console.log('Maximum value: ' + ratings.maxRating())
