
const LinkedList = require('../linkedlist/Linkedlist')

class Graph {
  constructor (vertices) {
    this.vertices = vertices

    this.list = {}

    for (const i of vertices) {
      this.list[i] = new LinkedList()
    }
  }

  addEdge (source, destination) {
    source = String(source)
    destination = String(destination)
    if (Object.keys(this.list).indexOf(source) >= 0 && Object.keys(this.list).indexOf(destination) >= 0) {
      this.list[source].insertAtHead(destination)
    }
  }

  printGraph () {
    console.log('>>Adjacency List of Directed Graph<<')
    let i
    for (i in this.list) {
      process.stdout.write('|' + String(i) + '| => ')
      let temp = this.list[i].getHead()
      while (temp != null) {
        process.stdout.write('[' + String(temp.data) + '] -> ')
        temp = temp.next
      }
      console.log('null ')
    }
  }

  strGraph () {
    let str = ''
    let i
    for (i in this.list) {
      str = str + '|' + String(i) + '| => '
      let temp = this.list[i].getHead()
      while (temp != null) {
        str += ('[' + String(temp.data) + '] -> ')
        temp = temp.next
      }
      str += 'null '
    }
    return str
  }
}

module.exports = Graph
