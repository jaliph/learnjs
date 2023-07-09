
const groupTitles = (strs) => {
  const map = {}

  for (const s of strs) {
    const count = new Array(26).fill(0)
    for (const c of s) {
      const index = c.charCodeAt(0) - 'a'.charCodeAt(0)
      count[index]++
    }
    if (count in map) {
      map[count].push(s)
    } else {
      map[count] = [s]
    }
  }
  const result = []
  for (const i in map) {
    result.push(map[i])
  }
  // console.log(result)
  return result
}

const titles = ['duel', 'dule', 'speed', 'spede', 'deul', 'cars']
const gt = groupTitles(titles)
const query = 'spede'

for (const [_, g] of Object.entries(gt)) {
  if (g.includes(query)) {
    console.log(g)
  }
}
