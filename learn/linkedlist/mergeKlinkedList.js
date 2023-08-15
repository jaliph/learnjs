// https://leetcode.com/problems/merge-k-sorted-lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length == 0) {
      return null
  }

  if (lists.length == 1) {
    return lists[0]
  }

  const merge = (l1, l2) => {
    let mergedHead = new ListNode()
    let w = mergedHead

    while (l1 && l2) {
      if (l1.val < l2.val) {
        w.next = new ListNode(l1.val)
        w = w.next
        l1 = l1.next
      } else {
        w.next = new ListNode(l2.val)
        w = w.next
        l2 = l2.next
      }
    }

    if (l1) {
      w.next = l1
    }

    if (l2) {
      w.next = l2
    }

    return mergedHead.next

  }

  let mergedLists
  while (lists.length > 1) {
    mergedLists = []
    for (let i = 0; i < lists.length; i = i + 2) {
      let first = lists[i]
      let second
      if (i + 1 < lists.length) {
        second = lists[i + 1]
      }
      mergedLists.push(merge(first, second))
    }
    lists = mergedLists
  }

  return lists[0]

};