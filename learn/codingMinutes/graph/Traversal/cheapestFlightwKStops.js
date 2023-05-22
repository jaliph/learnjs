// https://leetcode.com/problems/cheapest-flights-within-k-stops/

var findCheapestPrice = function(n, flights, src, dst, k) {
  
  let prices = Array(n).fill(Infinity)
  prices[src] = 0
  for (let i = 0; i <= k; i++) {
    let temp = [...prices]

    for (let e of flights) {
      let from = e[0]
      let to = e[1]
      let cost = e[2]
      
      if (prices[from] != Infinity && prices[from] + cost < temp[to]) {
        temp[to] = prices[from] + cost
      }
    }
    console.log(temp)
    prices = temp
  }

  return prices[dst] == Infinity ? -1 : prices[dst]
};


const main = () => {
  let n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
  console.log('The cheapest flights with k stops ', findCheapestPrice(n, flights, src, dst, k))

  n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
  console.log('The cheapest flights with k stops ', findCheapestPrice(n, flights, src, dst, k))

  n = 4, flights= [[0,1,1],[0,2,5],[1,2,1],[2,3,1]], src = 0, dst = 3, k = 1
  console.log('The cheapest flights with k stops ', findCheapestPrice(n, flights, src, dst, k))

  n = 7, flights= [[0,3,7],[4,5,3],[6,4,8],[2,0,10],[6,5,6],[1,2,2],[2,5,9],[2,6,8],[3,6,3],[4,0,10],[4,6,8],[5,2,6],[1,4,3],[4,1,6],[0,5,10],[3,1,5],[4,3,1],[5,4,10],[0,1,6]], src = 2, dst = 4, k = 1
  console.log('The cheapest flights with k stops ', findCheapestPrice(n, flights, src, dst, k))
}

main()