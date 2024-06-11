// https://leetcode.com/problems/copy-list-with-random-pointer/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function (head) {
  const map = new Map()

  map.set(null, null)

  let temp = head

  while (temp) {
    const copy = new Node(temp.val)
    map.set(temp, copy)
    temp = temp.next
  }

  temp = head
  while (temp) {
    copy = map.get(temp)
    copy.next = map.get(temp.next)
    copy.random = map.get(temp.random)
    temp = temp.next
  }

  return map.get(head)
}
