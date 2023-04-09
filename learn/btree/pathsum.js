class TreeNode {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
};

const find_paths = function (root, sum) {
  const allPaths = []

  const findPathsRecur = (currentNode, sum, currentPath, allPaths) => {
    if (currentNode == null) {
      return
    }

    currentPath.push(currentNode.value)
    // console.log(currentPath)

    if (currentNode.value == sum && currentNode.left == null && currentNode.right == null) {
      allPaths.push(Object.assign([], currentPath))
    } else {
      findPathsRecur(currentNode.left, sum - currentNode.value, currentPath, allPaths)
      findPathsRecur(currentNode.right, sum - currentNode.value, currentPath, allPaths)
    }

    currentPath.pop()
  }
  findPathsRecur(root, sum, [], allPaths)
  return allPaths
}

const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23

console.log(find_paths(root, 23))
