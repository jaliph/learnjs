// https://leetcode.com/problems/reverse-nodes-in-k-group/

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
const reverseKGroup = function (head, k) {
  const newHead = new ListNode()
  newHead.next = head

  const getKthNode = (curr, k) => {
    while (curr && k > 0) {
      curr = curr.next
      k--
    }
    return curr
  }

  let groupPrev = newHead

  while (true) {
    const kth = getKthNode(groupPrev, k)
    if (!kth) {
      break
    }

    groupNext = kth.next

    // reverse
    // new tail should be kth next
    // start from groupPrev.next till groupNext
    let prev = kth.next; let curr = groupPrev.next
    while (curr != groupNext) {
      const nxt = curr.next
      curr.next = prev
      prev = curr
      curr = nxt
    }

    const tmp = groupPrev.next
    groupPrev.next = kth
    groupPrev = tmp
  }

  return newHead.next
}
