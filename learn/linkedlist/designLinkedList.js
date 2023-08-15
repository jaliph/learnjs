// https://leetcode.com/problems/design-linked-list/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var MyLinkedList = function() {
  this.head = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let i = 0
  // console.log(JSON.stringify(this.head))
  let temp = this.head
  while (temp) {
    if (i == index) {
      return temp.val
    }
    temp = temp.next
    i++
  }
  return -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let temp = new ListNode(val)
  temp.next = this.head
  this.head = temp
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let temp = this.head
  if (!temp) {
    this.head = new ListNode(val)
  } else {
    while (temp.next != null) {
      temp = temp.next
    }
    temp.next = new ListNode(val)
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index == 0) {
    let temp = new ListNode(val)
    temp.next = this.head
    this.head = temp
  } else {
    let i = 0
    let temp = this.head
    let prev
    while (temp) {
      if (i === index) {
        prev.next = new ListNode(val)
        prev.next.next = temp
        return
      }
      prev = temp
      temp = temp.next
      i++
    }

    // Add at last node
    if (prev && i === index) {
      prev.next = new ListNode(val)
      prev.next.next = temp
    }
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index == 0) {
    this.head = this.head.next
  } else {
    let i = 0
    let temp = this.head
    let prev
    while (temp) {
      if (i === index) {
        prev.next = temp.next
        break
      }
      prev = temp
      temp = temp.next
      i++
    }
  }
};


/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList()

// // "addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"
// // [],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]

// obj.addAtHead(7)
// obj.addAtHead(2)
// obj.addAtHead(1)
// obj.addAtIndex(3, 0)
// obj.deleteAtIndex(2)
// obj.addAtHead(6)
// obj.addAtTail(4)
// console.log(obj.get(4))
// console.log(JSON.stringify(obj))

// console.log(JSON.stringify(obj))

// ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
// [[],[1],[3],[1,2],[1],[1],[1]]

obj.addAtHead(1)
obj.addAtTail(3)
obj.addAtIndex(1, 2)
obj.addAtIndex(0, 4)

console.log(JSON.stringify(obj))
obj.deleteAtIndex(0)
console.log(JSON.stringify(obj))
// console.log(obj.get(1))
// console.log(JSON.stringify(obj))
// obj.deleteAtIndex(1)
// console.log(obj.get(1))
// console.log(JSON.stringify(obj))

// obj.addAtIndex(1, 0)
// obj.get(0)