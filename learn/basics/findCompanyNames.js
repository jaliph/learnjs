https://leetcode.com/problems/naming-a-company/description/
/**
 * @param {string[]} ideas
 * @return {number}
 */
let distinctNames = function (ideas) {
  const nameMap = new Map()

  for (const idea of ideas) {
    const ch = idea[0]
    if (!nameMap.has(ch)) {
      nameMap.set(ch, new Set())
    }
    nameMap.get(ch).add(idea.slice(1))
  }

  console.log(nameMap)

  let count = 0
  const startChars = Array.from(nameMap.keys())
  for (let i = 0; i < startChars.length; i++) {
    for (let j = 0; j < startChars.length; j++) {
      if (startChars[i] != startChars[j]) {
        const set1 = nameMap.get(startChars[i])
        const set2 = nameMap.get(startChars[j])
        // console.log(startChars[i], startChars[j])
        let cnt = 0
        for (const prefix of set1) {
          if (set2.has(prefix)) {
            cnt++
          }
        }
        console.log(startChars[i], startChars[j])
        count += (set1.size - cnt) * (set2.size - cnt)
        console.log(count, set1.size - cnt, set2.size - cnt)
        // count += (set1.size + set2.size) - (2 * cnt)
        // console.log(set1.size, set2.size, cnt, count)
        // if (set1.size - cnt > 0 && set2.size - cnt > 0) {

        // }
      }
    }
  }
  return count
}

const main = () => {
  ideas = ['coffee', 'donuts', 'time', 'toffee']
  console.log('Total names possible are ', distinctNames(ideas))

  ideas = ['aaa', 'baa', 'caa', 'bbb', 'cbb', 'dbb']
  console.log('Total names possible are ', distinctNames(ideas))
}

main()
