/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
  // create disjoint set
  const uf = new UnionFind(n);
  // before the edges are sorted, add the index to each tuple so we dont lose the original order
  for (let i = 0; i < edges.length; i++) {
    edges[i].push(i);
  }
  // sort edges
  edges.sort((a, b) => a[2] - b[2]);
  // we need to find MST weight that we will compare other MSTs too
  const weight = findMSTWeight(n, edges);
  // declare critical and psuedo-critical arrays
  const critical = [];
  const pseudoCritical = [];
  // loop through edges and check if critical or not
  for (let i = 0; i < edges.length; i++) {
    // check if exlcuded, does weight go up? If so, add to critical
    if (weight < findMSTWeight(n, edges, i)) {
      critical.push(edges[i][3]);
    } else if (weight === findMSTWeight(n, edges, -1, i)) {
      pseudoCritical.push(edges[i][3]);
    }
  }
  return [critical, pseudoCritical];
};

const findMSTWeight = (n, edges, exclude = -1, include = -1) => {
  const uf = new UnionFind(n);
  let mst_weight = 0;
  // make sure to include edge if not -1
  if (include !== -1) {
    const [n1, n2, weight, idx] = edges[include];
    if (uf.union(n1, n2)) mst_weight += weight;
  }

  for (let i = 0; i < edges.length; i++) {
    if (i === exclude) continue;
    const [n1, n2, weight, idx] = edges[i];
    if (uf.union(n1, n2)) mst_weight += weight;
  }
  // check if connected
  if (!uf.connected()) return Infinity;
  return mst_weight;
};

class UnionFind {
  constructor (v) {
    this.parents = []
    this.ranks = []
    this.connectedComponents = v
    for (let i = 0; i < v; i++) {
      this.parents[i] = -1
      this.ranks[i] = 1
    }
  }

  find(i) {
    if (this.parents[i] == -1) {
      return i
    }
    return this.parents[i] = this.find(this.parents[i])
  }

  union(i, j) {
    let p1 = this.find(i)
    let p2 = this.find(j)

    if (p1 != p2) {
      if (this.ranks[p1] < this.ranks[p2]) {
        this.parents[p1] = p2
        this.ranks[p1]++
      } else {
        this.parents[p2] = p1
        this.ranks[p2]++
      }
      this.connectedComponents--
      return true
    }
    return false
  }

  connected() {
    return this.connectedComponents == 1
  }
}



const main = () => {
  n = 5, edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
  console.log('the critical and pseudo-crtical edges are ', findCriticalAndPseudoCriticalEdges(n, edges))

  n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]
  console.log('the critical and pseudo-crtical edges are ', findCriticalAndPseudoCriticalEdges(n, edges))

  n = 14, edges = [[0,1,13],[0,2,6],[2,3,13],[3,4,4],[0,5,11],[4,6,14],[4,7,8],[2,8,6],[4,9,6],[7,10,4],[5,11,3],[6,12,7],[12,13,9],[7,13,2],[5,13,10],[0,6,4],[2,7,3],[0,7,8],[1,12,9],[10,12,11],[1,2,7],[1,3,10],[3,10,6],[6,10,4],[4,8,5],[1,13,4],[11,13,8],[2,12,10],[5,8,1],[3,7,6],[7,12,12],[1,7,9],[5,9,1],[2,13,10],[10,11,4],[3,5,10],[6,11,14],[5,12,3],[0,8,13],[8,9,1],[3,6,8],[0,3,4],[2,9,6],[0,11,4],[2,5,14],[4,11,2],[7,11,11],[1,11,6],[2,10,12],[0,13,4],[3,9,9],[4,12,3],[6,7,10],[6,8,13],[9,11,3],[1,6,2],[2,4,12],[0,10,3],[3,12,1],[3,8,12],[1,8,6],[8,13,2],[10,13,12],[9,13,11],[2,11,14],[5,10,9],[5,6,10],[2,6,9],[4,10,7],[3,13,10],[4,13,3],[3,11,9],[7,9,14],[6,9,5],[1,5,12],[4,5,3],[11,12,3],[0,4,8],[5,7,8],[9,12,13],[8,12,12],[1,10,6],[1,9,9],[7,8,9],[9,10,13],[8,11,3],[6,13,7],[0,12,10],[1,4,8],[8,10,2]]
  console.log('the critical and pseudo-crtical edges are ', findCriticalAndPseudoCriticalEdges(n, edges))
}

main()
