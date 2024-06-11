// https://leetcode.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let carry = 0
  const newHead = new ListNode()
  let writeNode = newHead

  let h1 = l1; let h2 = l2
  while (h1 || h2) {
    let sum = 0
    if (h1) {
      sum = sum + h1.val
      h1 = h1.next
    }

    if (h2) {
      sum = sum + h2.val
      h2 = h2.next
    }

    if (carry > 0) {
      sum = sum + carry
    }
    // console.log(sum)
    writeNode.next = new ListNode(sum % 10)
    writeNode = writeNode.next
    carry = ~~(sum / 10)
  }

  while (carry > 0) {
    writeNode.next = new ListNode(carry % 10)
    writeNode = writeNode.next
    carry = ~~(carry / 10)
  }

  return newHead.next
}
