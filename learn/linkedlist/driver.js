
const LinkedList = require('./Linkedlist')

const list = new LinkedList()
console.log(list.isEmpty())

list.insertAtHead(2)
list.insertAtHead(3)
list.insertAtHead(4)

list.insertAtTail(33)

console.log(list.toString())
// list.deleteAtHead()
list.delete(2)
list.insertAtTail(11)
console.log(list.toString())
list.reverse()
console.log(list.toString())
