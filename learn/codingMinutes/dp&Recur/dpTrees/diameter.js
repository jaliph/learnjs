// find the diameter of the tree

class Tree {
  constructor(num) {
    this.size = num
    this.vertices = {}
  }

  addEdge (i, j) {
    this.vertices[i] = this.vertices[i] || []
    this.vertices[j] = this.vertices[j] || []
    this.vertices[i].push(j)
    this.vertices[j].push(i)
  }
}

const DFS = (curr, parent, tree, fx, gx) => {

  // need 2 maxes
  let max_1 = 0, max_2 = 0

  for (let v of tree.vertices[curr]){
    if (v != parent) {
      DFS(v, curr, tree, fx, gx)

      gx[curr] = Math.max(gx[v] + 1, gx[curr])
      fx[curr] = Math.max(fx[v], fx[curr])
      
      // need two max values in tehe children sub trees
      if (gx[v] + 1 > max_1) {
        max_2 = max_1
        max_1 = gx[v] + 1
      } else if (gx[v] + 1 > max_2) {
        max_2 = gx[v] + 1
      }
    }
  }
  fx[curr] = Math.max(fx[curr], max_1 + max_2)
}

const diameterFinder = (tree) => {
  const fx = Array(tree.size + 1).fill(0)
  const gx = Array(tree.size + 1).fill(0)
  DFS(1, -1, tree, fx, gx)
  return fx[1]
}

const main = () => {
  const t = new Tree(7)

  t.addEdge(1, 2)
  t.addEdge(1, 3)
  t.addEdge(1, 4)
  t.addEdge(2, 5)
  t.addEdge(3, 6)
  t.addEdge(4, 7)

  console.log('The diameter of tree is ', diameterFinder(t))
}

main()