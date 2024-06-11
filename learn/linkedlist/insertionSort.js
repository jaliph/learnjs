// https://leetcode.com/problems/insertion-sort-list/

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
const insertionSortList = function (head) {
  const newHead = new ListNode()
  newHead.next = head

  let prev = head; let curr = head.next

  while (curr) {
    if (curr.val >= prev.val) {
      prev = curr
      curr = curr.next
      continue
    }

    let tmp = newHead
    while (curr.val > tmp.next.val) {
      tmp = tmp.next
    }

    prev.next = curr.next
    curr.next = tmp.next
    tmp.next = curr

    // update to go next pointer for curr
    curr = prev.next
  }

  return newHead.next
}
