// https://leetcode.com/problems/reverse-linked-list-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if (!head || head.next == null) {
    return head
  }

  if (right - left == 0) {
    return head
  }

  let newHead = new ListNode()
  newHead.next = head

  let i = 0
  let curr = newHead
  let lprev
  while (curr) {
    if (i == left) {
      break
    }
    lprev = curr
    curr = curr.next
    i++
  }

  // console.log('p', lprev)  // next should be nulll
  // console.log('c', curr)  // reversed from here
  let prev = null
  i = 0
  while (curr) {
    if (i == (right - left + 1)) {
      break
    }
    let nxt = curr.next
    curr.next = prev
    prev = curr
    curr = nxt
    i++
  }

  lprev.next.next = curr
  lprev.next = prev
  return newHead.next
};