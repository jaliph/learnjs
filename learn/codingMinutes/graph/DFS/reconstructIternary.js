// https://leetcode.com/problems/reconstruct-itinerary/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = function(tickets) {
  class Graph {
    constructor() {
      this.vertices = {}
    }
  
    addEdge(i, j) {
      this.vertices[i] = this.vertices[i] || []
      this.vertices[i].push(j)
    }

    DFS (source) {
      let path = []

      const DFSHelper = (curr) => {
       
        while(this.vertices[curr] && this.vertices[curr].length > 0) {
          let neighbor = (this.vertices[curr] || []).shift()
          DFSHelper(neighbor)
        }
        path.push(curr)
      }

      DFSHelper(source)
      return path.reverse()
    }
  }

  let g = new Graph()

  for (let ticket of tickets) {
    g.addEdge(ticket[0], ticket[1])
  }

  for (let i in g.vertices) {
    g.vertices[i].sort()
  }

  return g.DFS("JFK")
}



const main = () => {
  // let tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]

  // console.log('The iternary is ', findItinerary(tickets))

  tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
  console.log('The iternary is ', findItinerary(tickets))

  tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
  console.log('The iternary is ', findItinerary(tickets))
}


main()