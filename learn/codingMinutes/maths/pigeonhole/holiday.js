// https://www.spoj.com/problems/HOLI/

const maxTravelCost = (cities, highways) => {
  const g = Array(cities + 1).fill().map(() => Array().fill([]))

  for (const h of highways) {
    g[h[0]].push([h[1], h[2]])
    g[h[1]].push([h[0], h[2]])
  }

  let ans = 0

  const DFS = (curr, par) => {
    let currSize = 1

    for (const n of g[curr]) {
      const [neig, wt] = n
      if (neig != par) {
        const childTree = DFS(neig, curr)
        const edgeContri = 2 * Math.min(childTree, cities - childTree) * wt
        ans += edgeContri
        currSize += childTree
      }
    }
    return currSize
  }

  DFS(1, -1)

  return ans
}

const main = () => {
  cities = 4, highways = [[1, 2, 3], [2, 3, 2], [4, 3, 2]]
  console.log('Max travel for citizens are ', maxTravelCost(cities, highways))
}

main()

// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
// input_stdin += data;
// });

// process.stdin.on('end', function () {
// input_stdin_array = input_stdin.split("\n");
//     main();
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

// function main() {
//   let t = parseInt(readLine())
//   console.log(t)
//   while (t-- > 0) {
//     let cities = parseInt(readLine())
//     let highways = []
//     for (let i = 0; i < cities - 1; i++) {
//       let edge = readLine().split(' ')
//       highways.push([parseInt(edge[0]), parseInt(edge[1]), parseInt(edge[2])])
//     }
//     console.log(`Case #${t + 1}: ${maxTravelCost(cities, highways)}`)
//   }
// }
