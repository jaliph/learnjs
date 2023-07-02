
/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
  let nameMap = new Map()

  for (let idea of ideas) {
    let ch = idea[0]
    if (!nameMap.has(ch)) {
      nameMap.set(ch, new Set())
    }
    nameMap.get(ch).add(idea.slice(1))
  }

  console.log(nameMap)

  let count = 0
  let startChars = Array.from(nameMap.keys())
  for (let i = 0; i < startChars.length; i++) {
    for (let j = 0; j < startChars.length; j++) {
      if (startChars[i] != startChars[j]) {
        let set1 = nameMap.get(startChars[i])
        let set2 = nameMap.get(startChars[j])
        // console.log(startChars[i], startChars[j])
        let cnt = 0
        for (let prefix of set1) {
          if (set2.has(prefix)) {
            cnt++
          }
        }
        count += (set1.size - cnt) * (set2.size - cnt)
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
  ideas = ["coffee","donuts","time","toffee"]
  console.log('Total names possible are ', distinctNames(ideas))

  ideas = ["aaa","baa","caa","bbb","cbb","dbb"]
  console.log('Total names possible are ', distinctNames(ideas))
}

main()