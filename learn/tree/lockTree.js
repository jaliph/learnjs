// https://leetcode.com/problems/operations-on-tree/
/**
 * @param {number[]} parent
 */
const LockingTree = function (parent) {
  this.parent = parent
  this.nodes = Array(parent.length).fill(0)
  this.g = Array(parent.length).fill().map(() => Array().fill([]))

  for (const [i, p] of parent.entries()) {
    if (p == -1) continue
    console.log(i, p)
    this.g[p].push(i)
  }
}

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.lock = function (num, user) {
  if (this.nodes[num] === 0) {
    this.nodes[num] = user
    return true
  }
  return false
}

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.unlock = function (num, user) {
  if (this.nodes[num] === user) {
    this.nodes[num] = 0
    return true
  }
  return false
}

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.upgrade = function (num, user) {
  // checking parents & itself
  let p = num; let pFlag = true
  while (p != -1) {
    if (this.nodes[p] != 0) {
      pFlag = false
      break
    }
    p = this.parent[p]
  }

  if (!pFlag) {
    return false
  }

  // check decendants
  const q = [num]; let k = 0
  const lockedChildren = []
  while (k < q.length) {
    const curr = q[k++]
    if (this.nodes[curr] != 0) {
      lockedChildren.push(curr)
    }
    for (const n of this.g[curr]) {
      q.push(n)
    }
  }

  if (lockedChildren.length > 0) {
    for (const n of lockedChildren) {
      this.nodes[n] = 0
    }
    this.nodes[num] = user
    return true
  }
  return false
}

/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */
