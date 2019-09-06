class Btree {
  constructor (data) {
    this.data = data
  }

  setData (data) {
    this.data = data
  }

  setRight (node) {
    this.right = node
  }

  setLeft (node) {
    this.left = node
  }

  getLeft () {
    return this.left
  }

  getRight () {
    return this.right
  }

  getData () {
    return this.data
  }
}

let root = null
const driver = () => {
  let b1 = new Btree()
  b1.setData(2)
  let b2 = new Btree()
  b2.setData(3)
  let b3 = new Btree()
  b3.setData(4)
  let b4 = new Btree()
  b4.setData(5)
  let b5 = new Btree()
  b5.setData(6)
  let b6 = new Btree()
  b6.setData(7)
  b1.setLeft(b2)
  b1.setRight(b3)
  b2.setLeft(b4)
  b2.setRight(b5)
  b3.setLeft(b6)
  root = b1
}

const preOrder = (node) => {
  if (!node) return
  console.log(node.data)
  preOrder(node.getLeft())
  preOrder(node.getRight())
}

const inOrder = (node) => {
  if (!node) return
  inOrder(node.getLeft())
  console.log(node.getData())
  inOrder(node.getRight())
}

const postOrder = (node) => {
  if (!node) return
  postOrder(node.getLeft())
  postOrder(node.getRight())
  console.log(node.data)
}

const levelOrder = (node) => {
  let temp = node
  const queue = []
  queue.push(temp)
  while (queue.length !== 0) {
    temp = queue.shift()
    console.log(temp.data)
    if (temp.getLeft()) {
      queue.push(temp.getLeft())
    }
    if (temp.getRight()) {
      queue.push(temp.getRight())
    }
    // console.dir(queue)
  }
}

const preOrderNonRecursive = (node) => {
  const stack = []
  while (true) {
    while (node) {
      console.log(node.getData())
      stack.unshift(node)
      node = node.getLeft()
    }
    if (stack.length === 0) break
    node = stack.shift()
    node = node.getRight()
  }
}

const inOrderNonRecursive = (node) => {
  const stack = []
  while (true) {
    while (node) {
      stack.unshift(node)
      node = node.getLeft()
    }
    if (stack.length === 0) break
    node = stack.shift()
    console.log(node.getData())
    node = node.getRight()
  }
}

const postOrderNonRecursive = (node) => {
  return
}

const sizeOfTree = (node) => {
  if (!node) return 0
  else return (sizeOfTree(node.getLeft()) + 1 + sizeOfTree(node.getRight()))
}

driver()
console.log('Size :: ', sizeOfTree(root))
// console.log('--------PRE---------')
// preOrder(root)
// console.log('-------NONREQ PRE-------')
// preOrderNonRecursive(root)
console.log('---------IN--------')
inOrder(root)
console.log('-------INREQ PRE-------')
inOrderNonRecursive(root)
// console.log('------POST-----------')
// postOrder(root)
// console.log('--------LEVEL---------')
// levelOrder(root)
