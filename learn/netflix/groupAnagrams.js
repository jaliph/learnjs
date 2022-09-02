
const groupTitles = (strs) => {
  let map = {}

  for (let s of strs) {
    let count = new Array(26).fill(0)
    for (let c of s) {
      let index = c.charCodeAt(0) - 'a'.charCodeAt(0)
      count[index]++
    }
    if (count in map ) {
      map[count].push(s)
    } else {
      map[count] = [s]
    }
  }
  let result = []
  for (let i in map) {
    result.push(map[i])
  }
  // console.log(result)
  return result
}


var titles = ["duel","dule","speed","spede","deul","cars"]
var gt = groupTitles(titles)
var query = "spede" 

for (var [_, g] of Object.entries(gt)) {
    if (g.includes(query)){
        console.log(g)
    }
}