/**
 * @param {number[][]} bombs
 * @return {number}
 */
const maximumDetonation = function (bombs) {
  const g = Array(bombs.length).fill().map(() => Array().fill([]))

  for (let i = 0; i < bombs.length; i++) {
    for (let j = i + 1; j < bombs.length; j++) {
      const distancebetweeni2j = Math.sqrt(
        ((bombs[i][0] - bombs[j][0]) * (bombs[i][0] - bombs[j][0])) +
        ((bombs[i][1] - bombs[j][1]) * (bombs[i][1] - bombs[j][1]))
      )
      // console.log(distancebetweeni2j)

      if (bombs[i][2] >= distancebetweeni2j) {
        // console.log('can go from i - j', bombs[i][2])
        g[i].push(j)
      }

      if (bombs[j][2] >= distancebetweeni2j) {
        // console.log('can go from  j - i')
        g[j].push(i)
      }
    }
  }

  const DFS_Helper = (curr, visited) => {
    let ans = 1
    visited[curr] = true
    console.log('visited', curr)
    for (const n of g[curr]) {
      if (!visited[n]) {
        ans += DFS_Helper(n, visited)
      }
    }
    return ans
  }

  console.log(g)
  let length = 0
  for (let i = 0; i < bombs.length; i++) {
    console.log(DFS_Helper(i, []))
    length = Math.max(length, DFS_Helper(i, []))
  }

  return length
}

const main = () => {
  bombs = [[2, 1, 3], [6, 1, 4]]
  console.log('longest chain is ', maximumDetonation(bombs))

  bombs = [[1, 2, 3], [2, 3, 1], [3, 4, 2], [4, 5, 3], [5, 6, 4]]
  console.log('longest chain is ', maximumDetonation(bombs))

  bombs = [[1, 1, 5], [10, 10, 5]]
  console.log('longest chain is ', maximumDetonation(bombs))

  bombs = [[4, 4, 3], [4, 4, 3]]
  console.log('longest chain is ', maximumDetonation(bombs))
}

main()
