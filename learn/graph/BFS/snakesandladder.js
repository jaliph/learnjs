/*

Snakes and Ladder Game

You are playing a snakes & ladder game which is a famous ancient Indian game played on board with dice. Given a Snakes & Ladders board of size N, which contains multiple Snakes & Ladders. You are also given starting & ending point of each snake & ladder in a vector<pair<int,int> >. As per the rules -

    If you are bitten by snake (by standing at cell having snake head), you will reach the position where tail of the snake ends.

    If you reach a cell, which is also starting point of a ladder, then you will climb that ladder.

Give the board configuration, compute the minimum number of dice throws needed to reach the end of the game starting from cell 1. In each turn you can throw any number from 1 to 6 on the dice to move ahead in the board.

Example
For example in the above example, 4 dice throws are needed.

    1 ---> 7 ---> 27 ---> 30 ---> 36

INPUT : n = 36

   ladders = {{2,15},{5,7},{9,27},{18,29},{25,35}};

   snakes = {{17,4},{20,6},{34,12},{24,16},{32,30}};

Explanation

Output : 4 turns

In the 1st turn you throw a 4 (to reach 5 and then climb ladder to reach 7)

In the 2nd turn you throw a 2 (to reach 9 and then climb ladder to reach 27)

In the 3rd turn you throw a 3 (to reach 30)

In the 4th turn you throw a 6 (to reach 36)

*/

class Graph {
  constructor () {
    this.vertices = {}
    this.maxDegreeIndex = 0
  }

  addEdge (i, j, isDirected) {
    if (isDirected) {
      this.vertices[i] = this.vertices[i] || []
      this.vertices[i].push(j)
    } else {
      this.vertices[i] = this.vertices[i] || []
      this.vertices[j] = this.vertices[j] || []
      this.vertices[i].push(j)
      this.vertices[j].push(i)
    }
  }

  BFS (source, destination) {
    const size = Object.keys(this.vertices).length
    const depth = Array(size + 1).fill(0)
    const visited = Array(size + 1).fill(false)

    const q = []
    q.push(source)
    visited[source] = true
    depth[source] = 0
    while (q.length > 0) {
      const curr = q.shift()
      let n
      for (n of this.vertices[curr]) {
        if (!visited[n]) {
          q.push(n)
          visited[n] = true
          depth[n] = depth[curr] + 1
          if (n == destination) {
            break
          }
        }
      }
      if (n == destination) {
        break
      }
    }

    return depth[destination]
  }
}

const minJumps = (n, ladders, snakes) => {
  const board = Array(n + 1).fill(0)

  for (const l of ladders) {
    const source = l[0]
    const dest = l[1]
    board[source] = source - dest
    // +ve value
  }

  for (const l of snakes) {
    const source = l[0]
    const dest = l[1]
    board[source] = source - dest
    // -ve value
  }

  const g = new Graph()
  for (let s = 1; s <= n; s++) {
    for (let dice = 1; dice <= 6; dice++) {
      let d = s + dice
      d = d + board[d]
      if (d <= n) {
        g.addEdge(s, d)
      }
    }
  }

  return g.BFS(1, n)
}

const main = () => {
  const n = 36
  const ladders = [[2, 15], [5, 7], [9, 27], [18, 29], [25, 35]]
  const snakes = [[17, 4], [20, 6], [34, 12], [24, 16], [32, 30]]

  console.log('the min jumps to reach the top is ', minJumps(n, ladders, snakes))
}

main()
