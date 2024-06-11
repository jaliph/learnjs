// https://leetcode.com/problems/odd-even-linked-list/

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
const oddEvenList = function (head) {
  if (!head || !head.next) {
    return head
  }

  const newHead = new ListNode()

  let writeNode = newHead
  let [odd, even] = [head, head.next]

  while (odd) {
    writeNode.next = new ListNode(odd.val)
    writeNode = writeNode.next
    odd = odd.next ? odd.next.next : null
  }

  while (even) {
    writeNode.next = new ListNode(even.val)
    writeNode = writeNode.next
    even = even.next ? even.next.next : null
  }

  return newHead.next
}
