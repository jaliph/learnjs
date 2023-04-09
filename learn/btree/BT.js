function max (a, b) {
  return a > b ? a : b
}
function min (a, b) {
  return a < b ? a : b
}
class BT {
  preOrderTraversal (root) {
    const traversedArray = []
    if (root === null) {
      return
    }
    function helper (r) {
      traversedArray.push(root.val)
      if (r.left) helper(r.left)
      if (r.right) helper(r.right)
    }
    helper(root)
    return traversedArray
  }

  preOrderTraversalIterative (root) {

  }

  postOrderTraversal (root) {
    const traversedArray = []
    if (root === null) {
      return
    }
    function helper (r) {
      if (r.left) helper(r.left)
      if (r.right) helper(r.right)
      traversedArray.push(root.val)
    }
    helper(root)
    return traversedArray
  }

  postOrderTraversalIterative (root) {
    if (root === null) {
      return
    }
    const stk = [root]
    const stk2 = []
    while (stk.length) {
      const n = stk.pop()
      if (n.left) {
        stk.push(n.left)
      }
      if (n.right) {
        stk.push(n.right)
      }
      stk2.unshift(n.val)
    }
    return stk2
  }

  inOrderTraversal (root) {

  }

  inOrderTraversalIterative (root) {

  }

  levelOrderTraversal (root) {
    const numbers = []
    const Q = []
    Q.push([root, 0])
    while (Q.length) {
      const x = Q.shift()
      const n = x[0]
      const l = x[1]
      if (n != null) {
        if (numbers[l]) {
          numbers[l].push(n.val)
        } else {
          numbers[l] = [n.val]
        }
        if (n.left != null) {
          Q.push([n.left, l + 1])
        }
        if (n.right != null) {
          Q.push([n.right, l + 1])
        }
      }
    }
    return numbers
  }

  constructTreePreIn (inorder, preorder) {

  }

  constructTreePostIn (inorder, preorder) {

  }

  heightOfTree (root) {
    if (root == null) {
      return 0
    }
    return max(this.heightOfTree(root.left), heightOfTree(root.right)) + 1
  }

  printVisualTree (root) {

  }

  insertNode (root, val) {

  }

  deleteNode (root, val) {

  }

  isMirror (root1, root2) {

  }

  mirrorIt (root) {

  }

  isSymetric (root) {

  }

  findLCA (root, n1, n2) {

  }

  distanceBetweenNode (root, n1, n2) {

  }

  maxSumPath (root) {

  }
}

class BTNode {
  constructor (val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}
