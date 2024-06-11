// https://leetcode.com/problems/accounts-merge/
// /**
//  * @param {string[][]} accounts
//  * @return {string[][]}
//  */
// const accountsMerge = function (accounts) {
//   const map = {}
//   // console.log(accounts)

//   for (const account of accounts) {
//     for (let i = 1; i < account.length; i++) {
//       if (map[account[i]]) {
//         map[account[i]] = [account[0], new Set([...account.slice(1), ...map[account[i]][1]]), true]
//       } else {
//         map[account[i]] = [account[0], new Set([...account.slice(1)])]
//       }
//     }
//   }

//   console.log(map)

//   const results = []
//   for (const account in map) {
//     if (map[account][2]) {
//       const intermediate = [map[account][0], ...[...map[account][1]].sort()]
//       for (const email of [...map[account][1]]) {
//         delete map[email]
//       }
//       results.push(intermediate)
//     }
//   }

//   for (const account in map) {
//     const intermediate = [map[account][0], ...map[account][1]]
//     for (const email of [...map[account][1]]) {
//       delete map[email]
//     }
//     results.push(intermediate)
//   }

//   return results.sort((a, b) => {
//     return a[0].localeCompare(b[0])
//   })
// }

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function (accounts) {
  class DSU {
    constructor (n) {
      this.parents = []
      this.ranks = []
      this.connected = n
      for (let i = 0; i < n; i++) {
        this.parents[i] = -1
        this.ranks[i] = 1
      }
    }

    find (i) {
      if (this.parents[i] == -1) {
        return i
      }
      return this.parents[i] = this.find(this.parents[i])
    }

    union (i, j) {
      const p1 = this.find(i)
      const p2 = this.find(j)
      if (p1 != p2) {
        if (this.ranks[p1] < this.ranks[p2]) {
          this.parents[p1] = p2
          this.ranks[p2] += this.ranks[p1]
        } else {
          this.parents[p2] = p1
          this.ranks[p1] += this.ranks[p2]
        }
        this.connected--
        return true
      } else {
        return false
      }
    }
  }

  const map = new Map()

  const dsu = new DSU(accounts.length)
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i]
    for (let j = 1; j < account.length; j++) {
      const email = account[j]

      if (map.has(email)) {
        dsu.union(i, map.get(email))
      }
      map.set(email, i)
    }
  }

  const leader = new Map()
  for (const [email, index] of map) {
    const parent = dsu.find(index)
    if (leader.has(parent)) {
      leader.get(parent).push(email)
    } else {
      leader.set(parent, [email])
    }
  }

  const result = []

  for (const [k, v] of leader) {
    result.push([accounts[k][0], ...v.sort()])
  }
  return result
}

const main = () => {
  // accounts = [['John', 'johnnybravo@mail.com'], ['Mary', 'mary@mail.com'], ['John', 'john_newyork@mail.com', 'johnsmith@mail.com'], ['John', 'johnsmith@mail.com', 'john00@mail.com']]
  // console.log(accountsMerge(accounts))

  // accounts = [['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'], ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'], ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'], ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'], ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co']]
  // console.log(accountsMerge(accounts))
  accounts = [['John', 'johnsmith@mail.com', 'john_newyork@mail.com'], ['John', 'johnsmith@mail.com', 'john00@mail.com'], ['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com']]
  console.log(accountsMerge(accounts))
}

main()
