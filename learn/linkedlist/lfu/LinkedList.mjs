export class LinkedListNode {
  constructor (key, value, freq) {
    this.key = key
    this.val = value
    this.freq = freq
    this.next = null
    this.prev = null
  }
}

export class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  append (node) {
    node.next = null
    node.prev = null
    if (this.head == null) {
      this.head = node
    } else {
      this.tail.next = node
      node.prev = this.tail
    }
    this.tail = node
  }

  del (node) {
    if (node.prev != null) { node.prev.next = node.next } else { this.head = node.next }

    if (node.next != null) { node.next.prev = node.prev } else { this.tail = node.prev }

    node.next = null
    node.prev = null
  }
}
