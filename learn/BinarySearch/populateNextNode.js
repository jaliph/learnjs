// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  let curr = root
  let nxt  // used for next level
  if (curr) {
    nxt = curr.left
  }

  while (curr && nxt) {
    curr.left.next = curr.right
    if (curr.next) {
      curr.right.next = curr.next.left
    }

    curr = curr.next
    // reached end
    if (!curr) {
      curr = nxt
      nxt = curr.left
    }
  }
  return root
};