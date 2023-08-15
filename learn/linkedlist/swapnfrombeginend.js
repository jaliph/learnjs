// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
  let ahead = head, behind = head

  let kfromBegin
  let kfromEnd

  let t = 1
  while (t < k && ahead) {
    ahead = ahead.next
    t++
  }
  kfromBegin = ahead

  while (ahead.next != null) {
    ahead = ahead.next
    behind = behind.next
  }

  kfromEnd = behind
  // console.log(kfromEnd, kfromBegin)
  let temp = kfromBegin.val
  kfromBegin.val = kfromEnd.val
  kfromEnd.val = temp
  return head
};