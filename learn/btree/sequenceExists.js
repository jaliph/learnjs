class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_path = function(root, sequence) {
  
  const find_path_recur = (curr, sequence, i) => {
    if (curr == null ) {
      return false
    } 

    if (curr.value == sequence[i] && i == sequence.length - 1 && curr.left == null && curr.right == null ) {
      return true
    } else if (curr.value == sequence[i]) {
      return find_path_recur(curr.left, sequence, i + 1) || find_path_recur(curr.right, sequence, i + 1)
    }

    return false
  }
  return find_path_recur(root, sequence, 0)
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)