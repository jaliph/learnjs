// https://leetcode.com/problems/remove-nth-node-from-end-of-list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let ahead = head
  let behind = head

  let t = 0
  while (t < n && ahead) {
    ahead = ahead.next
    t++
  }
  // console.log(ahead)

  let prev
  while (ahead) {
    ahead = ahead.next
    prev = behind
    behind = behind.next
  }

  if (!prev) {
    head = head.next
  } else {
    prev.next = behind.next
  }

  // console.log(prev, behind)
  return head
};