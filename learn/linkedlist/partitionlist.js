// https://leetcode.com/problems/partition-list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let left = new ListNode()
  let lw = left
  let right = new ListNode()
  let rw = right

  let temp = head
  while (temp) {
    if (temp.val < x) {
      lw.next = temp
      lw = lw.next
    } else {
      rw.next = temp
      rw = rw.next
    }
    temp = temp.next
  }

  lw.next = right.next
  rw.next = null
  return left.next
};