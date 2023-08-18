// https://leetcode.com/problems/construct-quad-tree/

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
   this.val = val;
   this.isLeaf = isLeaf;
   this.topLeft = topLeft;
   this.topRight = topRight;
   this.bottomLeft = bottomLeft;
   this.bottomRight = bottomRight;
};

const Print2D = arr => arr.forEach(o => console.log(...o))

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  const createQuadNode = (r, c, n) => {
    let flag = true
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[r][c] != grid[r + i][c + j]) {
          flag = false
          break
        }
      }
      if (!flag) {
        break
      }
    }

    if (flag) {
      return new Node(grid[r][c], true)
    } else {
      n = n >> 1
      return new Node(
        0,
        false,
        createQuadNode(r, c, n),
        createQuadNode(r, c + n, n),
        createQuadNode(r + n, c, n),
        createQuadNode(r + n, c + n, n)
      )
    }
  }
  return createQuadNode(0, 0, grid.length)
};
const main = () => {
  grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
  console.log(' The Quad Grid is ', JSON.stringify(construct(grid)))

}

main()