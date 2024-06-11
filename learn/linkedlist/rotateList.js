
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
const rotateRight = function (head, k) {
  if (!head || k === 0) {
    return head
  }
  let length = 0
  let temp = head
  let last
  while (temp) {
    length++
    last = temp
    temp = temp.next
  }

  k = k % length
  // console.log(k, length)
  if (k == 0) {
    return head
  }

  const ahead = length - k

  let prev
  temp = head
  // console.log(ahead)
  let i = 1
  while (i <= ahead) {
    prev = temp
    temp = temp.next
    i++
  }
  // console.log(prev)

  prev.next = null

  // prev = null
  const second = temp
  // temp.next
  last.next = head
  // console.log(last)
  // console.log(second)
  // console.log(head)

  return second
}
