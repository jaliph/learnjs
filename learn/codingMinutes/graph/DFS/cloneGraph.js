/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const map = new Map()
    const DFS = (node) => {
      // peculiar javascript case
      if (!node) return node

      if (map.has(node)) {
        return map.get(node)
      }

      copy = Node(node.val)
      map.set(node, copy)

      for (let n of node.neighbors) {
        copy.neighbors.push(DFS(n))
      }

      return copy
    }

    return DFS(node)
};