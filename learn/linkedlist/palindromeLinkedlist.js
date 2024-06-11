// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  let [slow, fast] = [head, head]

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  let prev = null
  let curr = slow
  while (curr) {
    const nxt = curr.next
    curr.next = prev
    prev = curr
    curr = nxt
  }

  while (head && prev) {
    if (head.val != prev.val) {
      return false
    }
    head = head.next
    prev = prev.next
  }

  return true
}
