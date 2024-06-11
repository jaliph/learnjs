// https://leetcode.com/problems/word-search-ii/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (board, words) {
  class TrieNode {
    constructor () {
      this.childs = new Map()
      this.terminal = false
      this.word = null
    }
  }

  class Trie {
    constructor () {
      this.root = new TrieNode()
    }

    insert (word) {
      let curr = this.root
      for (const ch of word) {
        if (!curr.childs.has(ch)) {
          curr.childs.set(ch, new TrieNode())
        }
        curr = curr.childs.get(ch)
      }
      curr.terminal = true
      curr.word = word
    }
  }

  const trie = new Trie()

  for (const word of words) {
    trie.insert(word)
  }

  const results = new Set()
  const r = board.length
  const c = board[0].length
  const visited = Array(r).fill().map(() => Array(c).fill(false))
  const paths = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  const dfs = (i, j, node) => {
    const ch = board[i][j]
    // base
    if (!node.childs.has(ch)) {
      return
    }

    node = node.childs.get(ch)
    visited[i][j] = true

    if (node.terminal) {
      results.add(node.word)
    }

    // recur
    for (const [dx, dy] of paths) {
      const n_i = i + dx
      const n_j = j + dy

      if (n_i >= 0 && n_i < r && n_j >= 0 && n_j < c && !visited[n_i][n_j]) {
        dfs(n_i, n_j, node)
      }
    }
    visited[i][j] = false
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      dfs(i, j, trie.root)
    }
  }

  return [...results]
}

const main = () => {
  board = [['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v']], words = ['oath', 'pea', 'eat', 'rain']
  console.log('All the words in the board are ', findWords(board, words))
}

main()
