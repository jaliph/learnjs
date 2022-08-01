
const TrieNode = function (char) {
  this.key = char

  this.parent  = null

  this.children = {}

  this.end = false

  this.getWord = function () {
    let output = []
    let node = this
    while (node != null) {
      output.unshift(node.key)
      node = node.parent
    }

    return output.join('')
   }
}

const Trie = function() {
  this.root = new TrieNode(null);

  this.insert = function (string) {
    let node = this.root

    for (let i = 0; i < string.length; i++) {
      if(!node.children[string[i]]) {
        node.children[string[i]] = new TrieNode(string[i])

        node.children[string[i]].parent = node
      }

      node = node.children[string[i]]

      if (i == string.length - 1) {
        node.end = true
      }
    }
  }

  this.contains = function(string) {
    let node = this.root

    for (let i = 0; i < string.length; i++) {
      if (node.children[string[i]]) {
        node = node.children[string[i]]
      } else {
        return false
      }
    }
     return node.end
  }

  this.find = function(prefix) {
    let node = this.root
    let output = []

    for (let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]]
      } else {
        return output
      }
    }

    findAllWords (node, output)

    return output
  }

  const findAllWords = function(node, arr) {
    if (node.end) {
      arr.unshift(node.getWord())
    }

    for (let child in node.children) {
      findAllWords(node.children[child], arr)
    }
  }

  this.remove = function(word) {
    let node = this.root
    if(!word) return false

    const removeWord = function (node, word) {

      if (node.end && node.getWord() === word) {
        const hasChildren = Object.keys(node.children).length > 0

        if (hasChildren) {
          node.end = false
        } else {
          node.parent.children = {}
        }

        return true
      }

      for (let i in node.children) {
        removeWord(node.children[i], word)
      }

      return false
    }

    removeWord(node, word)
  }

}


const trie = new Trie();

trie.insert("peter");
trie.insert("piper");
trie.insert("picked");
trie.insert("pickled");
trie.insert("pepper");

console.log(trie.contains("picked")); 
console.log(trie.contains("pepper")); 
console.log(trie.find("pe")); 


trie.remove("pepper");
// check find method
console.log(trie.find("pe")); 