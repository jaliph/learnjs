class Link {
  constructor (opts) {
    this.Link = opts.Link || null
    this.data = opts.data
  }
}

let head = null

const headNode = (data) => {
  if (head === null) {
    head = new Link({data: data})
  } else {
    let l1 = new Link({data: data})
    l1.Link = head
    head = l1
  }
}

const tailNode = (data) => {
  if (head === null) {
    head = new Link({data: data})
  } else {
    let l1 = new Link({data: data})
    let current = head
    while (current.Link !== null) {
      current = current.Link
    }
    current.Link = l1
  }
}

const traverseLinks = (current) => {
  while (current !== null) {
    console.log(current.data)
    current = current.Link
  }
}
// headNode(42)
// headNode(45)

tailNode(23)
headNode(46)

traverseLinks(head)
