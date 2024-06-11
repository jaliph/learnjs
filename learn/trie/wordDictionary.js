// https://leetcode.com/problems/design-add-and-search-words-data-structure/

class TrieNode {
  constructor (ch) {
    this.char = ch
    this.childs = new Map()
    this.terminal = false
  }
}

const WordDictionary = function () {
  this.root = new TrieNode()
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root

  for (const ch of word) {
    if (!curr.childs.has(ch)) {
      curr.childs.set(ch, new TrieNode(ch))
    }
    curr = curr.childs.get(ch)
  }
  curr.terminal = true
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const curr = this.root
  const dfs = (i, node) => {
    for (let j = i; j < word.length; j++) {
      const ch = word[j]
      if (ch === '.') {
        for (const child of node.childs.values()) {
          if (dfs(j + 1, child)) {
            return true
          }
        }
        return false
      } else {
        if (!node.childs.has(ch)) {
          return false
        }
        node = node.childs.get(ch)
      }
    }
    return node.terminal
  }
  return dfs(0, curr)
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
