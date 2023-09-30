  // https://leetcode.com/problems/all-paths-from-source-to-target/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const countPaths = function (edges, n) {
  const g = Array(n + 1).fill().map(() => Array().fill([]))

  const sieveOfEratosthenes = (n) => {
    const bool = Array(n + 1).fill(true)
  
    bool[0] = false
    bool[1] = false
  
    for (let i = 2; i <= n; i++) {
      for (let j = i * i; j <= n; j += i) {
        if (bool[j]) {
          bool[j] = false
        }      
      }
    }
  
    let primes = new Set()
    for (let i = 2; i <= n; i++) {
      if (bool[i]) {
        primes.add(i)
      }
    }
  
    return primes
  }

  const primes = sieveOfEratosthenes(n)
  console.log(primes)

  for (let e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  let count = 0

  const DFSSearch = (curr, par, isAncestorPrime) => {
    // console.log('visiting ', curr)
    for (const n of g[curr]) {
      if (n != par) {
        DFSSearch(n, curr, (primes.has(curr) || isAncestorPrime))
      }
    }
    if (isAncestorPrime || primes.has(curr)) {
      console.log(curr, ';adding for ances, curr')
      count++
    } 
  }

  DFSSearch(1, -1, false)
  return count
}

const main = () => {
  // let edges = [[1,2],[1,3],[2,4],[2,5]], n = 5
  // console.log('The paths are ', allPathsSourceTarget(edges, n))

  // n = 6, edges = [[1,2],[1,3],[2,4],[3,5],[3,6]]
  // console.log('The paths are ', allPathsSourceTarget(edges, n))


  n = 6, edges = [[1,2],[1,3],[2,4],[3,5],[3,6]]
  console.log('The paths are ', countPaths(edges, n))
}

main()
