// https://leetcode.com/problems/word-ladder/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) < 0) {
    return 0
  }

  const map = {}

  for (let pos = 0; pos < beginWord.length; pos++) {
    const key = beginWord.slice(0, pos) + '*' + beginWord.slice(pos + 1)
    if (map[key]) {
      map[key].push(beginWord)
    } else {
      map[key] = [beginWord]
    }
  }

  for (const word of wordList) {
    for (let pos = 0; pos < word.length; pos++) {
      const key = word.slice(0, pos) + '*' + word.slice(pos + 1)
      if (map[key]) {
        map[key].push(word)
      } else {
        map[key] = [word]
      }
    }
  }

  const q = []
  const visited = {}
  const start = [endWord, 1]
  visited[start] = true
  q.push(start)

  while (q.length > 0) {
    const curr = q.shift()

    const currWord = curr[0]
    const currDepth = curr[1]

    if (currWord == beginWord) {
      return currDepth
    }

    for (let pos = 0; pos < currWord.length; pos++) {
      const key = currWord.slice(0, pos) + '*' + currWord.slice(pos + 1)

      const children = map[key]
      for (const neighbor of children) {
        if (!visited[neighbor]) {
          q.push([neighbor, currDepth + 1])
          visited[neighbor] = true
        }
      }
    }
  }

  return 0
}

const main = () => {
  let dict = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
  let s = 'hit'
  let d = 'cog'

  console.log('The ladder length of the words is ', ladderLength(s, d, dict))

  dict = ['hot', 'dot', 'dog', 'lot', 'log']
  s = 'hit'
  d = 'cog'

  console.log('The ladder length of the words is ', ladderLength(s, d, dict))
}

main()
