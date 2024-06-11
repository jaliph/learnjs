// https://leetcode.com/problems/swap-nodes-in-pairs/

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
const swapPairs = function (head) {
  const newHead = new ListNode()
  newHead.next = head

  let prev = newHead; let curr = head

  while (curr && curr.next) {
    // save pointers
    const nxtPair = curr.next.next
    const second = curr.next

    // modify pointers
    curr.next = nxtPair
    second.next = curr
    prev.next = second

    // update pointers
    prev = curr
    curr = nxtPair
  }

  return newHead.next
}
