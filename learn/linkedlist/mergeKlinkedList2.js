// https://leetcode.com/problems/merge-k-sorted-lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class Heap {
  constructor  (comp) {
    this.heap = []
    this.size = 0
    this.comparator = comp || function (a, b) { return a - b } 
  }

  pop() {
    if (this.size > 0) {
      let data = this.heap[0]
      this.heap[0] = this.heap[this.size - 1]
      this.heap.pop()
      this.percolateDown(0)
      this.size--
      return data
    }
  }

  push(data) {
    this.heap.push(data)
    this.size++
    this.percolateUp(this.heap.length - 1)
  }

  percolateUp (index) {
    let parent = Math.floor((index - 1) / 2)
    if (parent >= 0 && this.comparator(this.heap[parent], this.heap[index]) > 0) {
      this.swap(parent, index)
      this.percolateUp(parent)
    }
  }

  percolateDown (index) {
    let leftChild = (index * 2) + 1
    let rightChild = (index * 2) + 2

    let parent = index
    if (leftChild < this.heap.length && this.comparator(this.heap[index], this.heap[leftChild]) > 0) {
      index = leftChild
    }
    if (rightChild < this.heap.length && this.comparator(this.heap[index], this.heap[rightChild]) > 0) {
      index = rightChild
    }

    if (index != parent) {
      this.swap(index, parent)
      this.percolateDown(index)
    }
  }

  swap (i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
  
}

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

  const h = new Heap((a, b) => a.val - b.val)

  for (let l of lists) {
    if (l) {
      h.push(l)
    }
  }


  let n = new ListNode()
  let w = n

  while (h.size > 0) {
    let list = h.pop()
    w.next = new ListNode(list.val)
    w = w.next

    if (list.next) {
      h.push(list.next)
    }
  }

  return n.next
};


// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

// let l1 = new ListNode(5)
// let l2 = new ListNode(2)
// l1.next = new ListNode(10)
// l2.next = new ListNode(20)

// const h = new Heap((a, b) => a.val - b.val)

// h.push(l1)
// h.push(l2)
// console.log(h.pop())


// console.log(h)