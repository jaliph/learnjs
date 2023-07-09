const LinkedList = require('../linkedlist/Linkedlist')
const Node = require('../linkedlist/Node')

const merge2LinkedList = function (head1, head2) {
  const mergeReCur = (head1, head2, merged) => {
    console.dir(head1)
    console.dir(head2)
    if (head1 == null) {
      merged.next = head2
      return merged
    }

    if (head2 == null) {
      merged.next = head1
      return merged
    }

    if (head1.data < head2.data) {
      merged.next = {
        data: head1.data,
        next: null
      }
      return mergeReCur(head1.next, head2, merged.next)
    }
    merged.next = {
      data: head2.data,
      next: null
    }
    return mergeReCur(head1, head2.next, merged.next)
  }
  const m = { data: null, next: null }
  mergeReCur(head1, head2, m)
  return m.next
}

const mergeLists = (head1, head2) => {
  const m = new LinkedList()
  while (head1 && head2) {
    if (head1.data < head2.data) {
      m.insertAtTail(head1.data)
      head1 = head1.next
    } else {
      m.insertAtTail(head2.data)
      head2 = head2.next
    }
  }

  while (head1 != null) {
    m.insertAtTail(head1.data)
    head1 = head1.next
  }
  while (head2 != null) {
    m.insertAtTail(head2.data)
    head2 = head2.next
  }
  return m
}

const list1 = new LinkedList()

list1.insertAtTail(2)
list1.insertAtTail(3)
list1.insertAtTail(4)

const list2 = new LinkedList()
list2.insertAtTail(1)
list2.insertAtTail(5)
list2.insertAtTail(10)

// let list3 = merge2LinkedList(list1.getHead(), list2.getHead())
// console.dir(list3)
const list3 = mergeLists(list1.getHead(), list2.getHead())
console.dir(list3)
console.log(list3.toString())

const print = (head) => {
  let temp = head
  while (temp != null) {
    console.log(temp.data)
    temp = temp.next
  }
}

console.log('----')
print(list3)

// k linked

// insert head of k linked into min heap
// while heap.length > 0
// pop from heap
// insert the popped data in end of the linkedlist
//  if (pop has a next) inset the next in the heap
