// https://leetcode.com/problems/intersection-of-two-linked-lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let [l1, l2] = [headA, headB]

  while (l1 != l2) {
    l1 = !l1 ? headB : l1.next
    l2 = !l2 ? headA : l2.next
  }

  return l1
};

