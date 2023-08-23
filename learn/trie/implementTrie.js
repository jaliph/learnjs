// https://leetcode.com/problems/implement-trie-prefix-tree/

class Node {
  constructor (char) {
    this.ch = char || null
    this.childs = new Map()
    this.terminal = false
    this.word = null
  }
}

var Trie = function() {
  this.root = new Node()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let curr = this.root
  for (let [i, ch] of [...word].entries()) {
    if (!curr.childs.has(ch)) {
      curr.childs.set(ch, new Node(ch))
    }
    curr = curr.childs.get(ch)

    if (i == word.length - 1) {
      curr.terminal = true
      curr.word = word
    }
  }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let curr = this.root
  for (let ch of word) {
    if (curr.childs.has(ch)) {
      curr = curr.childs.get(ch)
    } else {
      return false
    }
  }

  return curr.terminal
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let output = []
  const findAllWords = (node) => {
    if (!node) return 

    if (node.terminal) {
      output.push(node.word)
    }
    for (let val of node.childs.values()) {
      findAllWords(val)
    }
  }

  let curr = this.root

  for (let ch of prefix) {
    if (curr.childs.has(ch)) {
      curr = curr.childs.get(ch)
    } else {
      return output
    }
  }

  findAllWords(curr)

  return output
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie()
obj.insert('hi')
obj.insert('hello')
console.log(obj.search('hello1'))
console.log(obj.startsWith('hel1'))
// console.log(obj.root.childs)