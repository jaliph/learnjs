const stocks = [100, 180, 260, 310, 40, 535, 695]

class StockPurchase {
  constructor (buy, sell) {
    this.buy = buy
    this.sell = sell
  }

  set setBuy (b) { this.buy = b }
  set setSell (s) { this.sell = s }
  get getBuy () { return this.buy }
  get getSell () { return this.sell }
}

const StockFinder = (array) => {
  let i = 0
  const n = array.length
  const result = []
  let count = 0
  while (i <= n - 1) {
    while (i < n && (array[i] >= array[i + 1])) i++
    if (i === n - 1) {
      break
    }
    console.log('Came here')
    const s = new StockPurchase()
    s.setBuy = array[i]
    i++
    while (i < n && (array[i] <= array[i + 1])) i++
    s.setSell = array[i]
    result.push(s)
    count++
  }
  console.dir(result)
  console.log('Number of Stocks ', count)
}

StockFinder(stocks)
