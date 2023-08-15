
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let slow = head, fast = head.next

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  let second = slow.next
  //break the list
  slow.next = null
  
  // reverse the second part
  let curr = second
  let prev = null
  while (curr) {
    let nxt = curr.next
    curr.next = prev
    prev = curr
    curr = nxt
  }

  let first = head
  second = prev
  while (second) {
    let tmp1 = first.next
    let tmp2 = second.next

    first.next = second
    second.next = tmp1

    first = tmp1
    second = tmp2
  }
};

// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }


// let l1 = new ListNode()
// l1.val = 1
// l1.next = new ListNode()
// l1.next.val = 2
// l1.next.next = new ListNode()
// l1.next.next.val = 3
// l1.next.next.next = new ListNode()
// l1.next.next.next.val = 4


// console.log(l1)
const l3 = reorderList(l1)
console.log(l3)
