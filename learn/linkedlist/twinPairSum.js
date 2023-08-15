// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  let slow = head, fast = head.next

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  let second = slow.next
  slow.next = null


  let prev = null
  while (second) {
    let nxt = second.next
    second.next = prev
    prev = second
    second = nxt
  }


  let first = head
  second = prev

  let twinSum = 0

  while (first) {
    twinSum = Math.max(twinSum, (first.val + second.val))
    first = first.next
    second = second.next
  } 

  return twinSum
};