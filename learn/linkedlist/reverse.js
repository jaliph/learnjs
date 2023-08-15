
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
var reverseList = function(head) {
  if (!head || !head.next) {
    return head
  }
  
  let prev = null, curr = head
  let next 
  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
};



var reverseList2 = function(head) {

  if (!head)
    return null


  let newHead = head
  if (head.next) {
    newHead = reverseList2(head.next)
    head.next.next = head
  }
  head = null
  return newHead

}