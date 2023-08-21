class TreeNode {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
};

class TreeDiameter {
  constructor () {
    this.treeDiameter = 0
  }

  find_diameter (root) {
    const findDiameterRecur = (currNode) => {
      if (currNode == null) {
        return 0
      }

      const leftHeight = findDiameterRecur(currNode.left)
      const rightHeight = findDiameterRecur(currNode.right)

      if (leftHeight > 0 && rightHeight > 0) {
        const diameter = leftHeight + rightHeight + 1

        this.treeDiameter = Math.max(this.treeDiameter, diameter)
      }

      return Math.max(leftHeight, rightHeight) + 1
    }
    findDiameterRecur(root)
    return this.treeDiameter
  }
};

const treeDiameter = new TreeDiameter()
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
root.left.left = null
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
root.right.left.right.left = new TreeNode(10)
root.right.right.left.left = new TreeNode(11)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
