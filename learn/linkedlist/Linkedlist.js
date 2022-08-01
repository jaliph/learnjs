

// insertAtTail(data) - inserts an element at the end of the linked list
// insertAtHead(data) - inserts an element at the start/head of the linked list
// delete(data) - deletes an element with your specified value from the linked list
// deleteAtHead() - deletes the first element of the list
// search(data) - searches for an element in the linked list
// isEmpty() - returns true if the linked list is empty

const Node = require('./Node')

class LinkedList {
  constructor() {
    this.head = null
  }

  isEmpty () {
    return this.head === null
  }

  toString () {
    let temp = this.head
    let str = ''
    while (temp !== null) {
      str += '->' + temp.data
      temp = temp.next
    } 
    return str
  }

  insertAtHead(data) {
    let newNode = new Node(data)
    if (this.head === null) { 
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }

  insertAtTail(data) {
    let newNode = new Node(data)
    if (this.head === null) { 
      this.head = newNode
    } else {
      let temp = this.head
      while (temp.next !== null) {
        temp = temp.next
      }
      temp.next = newNode
    }
  }

  search(data) {
    let temp = this.head
    while (temp.next !== null) {
      if(temp.data == data) return true
      temp = temp.next
    }
    temp.next = newNode
    return false
  }

  deleteAtHead () {
    if (this.head === null) return

    let data = this.head.data
    this.head = this.head.next

    return data
  }

  delete (data) {
    if (this.head.data === data) {
      this.head = this.head.next
      return true
    } else {
      let temp = this.head
      while (temp.next !== null) {
        if (temp.next.data == data) {
          temp.next = temp.next.next
          return true
        }
        temp = temp.next      
      }
      return false
    }
  }

  reverse () {
    let current = this.head
    let previous = null
    let next

    while(current !== null) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }

    this.head = previous
  }

  hasCycle () { 
    let slowPtr = this.head
    let fastPtr = this.head

    while (slowPtr !== null && fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next
      fastPtr = fastPtr.next.next
      
      if (fastPtr = slowPtr) {
        return true
      }
    }

    return false
  }
}

module.exports = LinkedList
