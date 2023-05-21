// https://leetcode.com/problems/keys-and-rooms/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {
  class Graph {
    constructor(i) {
      this.vertices = {
        '0' : new Set()
      }
    }

    addEdge(i, j){
      this.vertices[i] = this.vertices[i] || new Set()
      this.vertices[j] = this.vertices[j] || new Set()

      this.vertices[i].add(j)
    }
  }

  let g = new Graph()
  for (let r in rooms) {
    for (let k of rooms[r]) {
      g.addEdge(r, k)
    }
  }
  console.log(g)

  const accessAllRooms = (v) => {
    const visited = {}

    const DFS_Helper = (curr) => {
      visited[curr] = true
      for (let n of g.vertices[curr]) {
        if (!visited[n]) {
          visited[n] = true
          DFS_Helper(n)
        }
      }
    }

    DFS_Helper(v)

    return Object.keys(visited).length == Object.keys(g.vertices).length
  }
  
  return accessAllRooms(0)
}


const main = () => {
  let r = [[1],[2],[3],[]]
  console.log('is possible ', canVisitAllRooms(r))

  r = [[1,3],[3,0,1],[2],[0]]
  console.log('is possible ', canVisitAllRooms(r))

  r = [[],[1],[2]]
  console.log('is possible ', canVisitAllRooms(r))
}

main()