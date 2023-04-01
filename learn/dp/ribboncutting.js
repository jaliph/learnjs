
const countRibbonPiecesBrute = (n, sizes) => {
  const countRibbonPiecesRecur = (n, sizes, i) => {
    if (n === 0) return 0

    if (i === sizes.length || sizes.length === 0) return -1


    if (sizes[i] > n) {
      return countRibbonPiecesRecur(n, sizes, i + 1)
    } else {
      let c1 = -1
      let result = countRibbonPiecesRecur(n - sizes[i], sizes, i)
      if (result !== -1) {
        c1 = 1 + result
      }

      let c2 = countRibbonPiecesRecur(n, sizes, i + 1)
      return Math.max(c1, c2)
    }
  }

  return countRibbonPiecesRecur(n, sizes, 0)
}


const countRibbonPieces2D = (n, sizes) => {
  const t = Array(sizes.length).fill(0).map(() => Array(n + 1).fill(-1))

  for (let i = 0; i < sizes.length; i++) {
    t[i][0] = 0
  }

  for (let j = 0; j <= n; j++) {
    t[0][j] = j % sizes[0] === 0 ? j / sizes[0] : -1
  }

  

  for (let i = 1; i < sizes.length; i++) {
    for (let j = 1; j <= n; j++) {
      if (sizes[i] > j) {
        t[i][j] = t[i - 1][j]
      } else {
        let c1 = -1
        if (t[i][j - sizes[i]] !== -1) {
          c1 = 1 + t[i][j - sizes[i]] 
        }
        t[i][j] = Math.max(t[i - 1][j], c1)
      }
    }
  }

  // console.dir(t)

  return t[sizes.length - 1][n]
}

const countRibbonPieces1D = (n, sizes) => {
  const t = Array(n + 1).fill(-1)

  t[0] = 0

  for (let i = 0; i < sizes.length; i++) {
    for (let j = 1; j <= n ; j++) {

      if (sizes[i] <= j && t[j - sizes[i]] != -1) {
        t[j] = Math.max(t[j], 1 + t[j - sizes[i]])
      }
    }
  }
  return t[n]
}


// Driver code
var main = function() {
  var sizes = [
      [1, 2, 3],
      [2, 3, 5],
      [2, 3],
      [3, 5, 7],
      [3, 5]
  ];

  var n = [5, 5, 7, 13, 7];
  
  // You can uncomment the line below and check how this recursive solution causes a time-out
  
  // sizes.push([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  // n.push(1500);

  for (var i = 0; i < sizes.length; i++) {
      console.log((i + 1) + ".\tThe maximum number of sizes that can make up the n of " + n[i] + " from " + "[" + sizes[i].join(", ") + "]" + " is " + countRibbonPiecesBrute(n[i], sizes[i]));
      console.log((i + 1) + ".\tThe maximum number of sizes that can make up the n of " + n[i] + " from " + "[" + sizes[i].join(", ") + "]" + " is " + countRibbonPieces2D(n[i], sizes[i]));
      console.log((i + 1) + ".\tThe maximum number of sizes that can make up the n of " + n[i] + " from " + "[" + sizes[i].join(", ") + "]" + " is " + countRibbonPieces1D(n[i], sizes[i]));
      console.log("-".repeat(100));
  }
}

main();


