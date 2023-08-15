// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  // base case
  if (!head || head.next == null) {
    return head
  }

  let first = head
  let tmp = getMiddle(head)
  let second = tmp.next
  tmp.next = null


  first = sortList(first)
  second = sortList(second)

  return merge(first, second)
};

const getMiddle = (head) => {
  let slow = head, fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

const merge = (l1, l2) => {
  let mergeRecur = (h1, h2, merged) => {
    if (!h1) {
      merged.next = h2
      return merged
    }

    if (!h2) {
      merged.next = h1
      return merged
    }
    
    if (h1.val < h2.val) {
      merged.next = new ListNode(h1.val)
      return mergeRecur(h1.next, h2, merged.next)
    } else {
      merged.next = new ListNode(h2.val)
      return mergeRecur(h1, h2.next, merged.next)
    }
  }
  let m = new ListNode()
  mergeRecur(l1, l2, m)
  return m.next
}