class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};



const find_maximum_path_sum = function(root) {
  // TODO: Write your code here
  let max = -Infinity
  const findSumRecur = (curr) => {
    if (curr == null) {
      return 0
    }

    let leftSum = findSumRecur(curr.left)
    let rightSum = findSumRecur(curr.right)


    leftSum = Math.max(leftSum, 0)
    rightSum = Math.max(rightSum, 0)

    let sUm = leftSum + rightSum + curr.value
    max = Math.max(sUm, max)

    return Math.max(leftSum, rightSum) + curr.value
  }
  findSumRecur(root);
  return max
};



var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)

root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)

root = new TreeNode(-1)
root.left = new TreeNode(-3)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)
