
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function (accounts) {
  const map = {}
  // console.log(accounts)

  for (const account of accounts) {
    for (let i = 1; i < account.length; i++) {
      if (map[account[i]]) {
        map[account[i]] = [account[0], new Set([...account.slice(1), ...map[account[i]][1]]), true]
      } else {
        map[account[i]] = [account[0], new Set([...account.slice(1)])]
      }
    }
  }

  console.log(map)

  const results = []
  for (const account in map) {
    if (map[account][2]) {
      const intermediate = [map[account][0], ...[...map[account][1]].sort()]
      for (const email of [...map[account][1]]) {
        delete map[email]
      }
      results.push(intermediate)
    }
  }

  for (const account in map) {
    const intermediate = [map[account][0], ...map[account][1]]
    for (const email of [...map[account][1]]) {
      delete map[email]
    }
    results.push(intermediate)
  }

  return results.sort((a, b) => {
    return a[0].localeCompare(b[0])
  })
}

const main = () => {
  accounts = [['John', 'johnnybravo@mail.com'], ['Mary', 'mary@mail.com'], ['John', 'john_newyork@mail.com', 'johnsmith@mail.com'], ['John', 'johnsmith@mail.com', 'john00@mail.com']]
  console.log(accountsMerge(accounts))

  accounts = [['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'], ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'], ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'], ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'], ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co']]
  console.log(accountsMerge(accounts))
}

main()
