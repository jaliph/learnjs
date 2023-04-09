import { LinkedListNode, LinkedList } from './LinkedList.mjs'

class LfuStructure {
  constructor (capacity) {
    this.cap = capacity
    this.size = 0
    this.min_freq = 0
    this.freq_dict = {}
    this.key_dict = {}
  }

  Get (key) {
    if (!(key in this.key_dict)) return null

    const temp = this.key_dict[key]
    this.key_dict[key] = new LinkedListNode(key, temp.val, temp.freq)
    this.freq_dict[temp.freq].del(temp)
    if (this.freq_dict[this.key_dict[key].freq].head == null) {
      delete this.freq_dict[this.key_dict[key].freq]
      if (this.min_freq == this.key_dict[key].freq) this.min_freq += 1
    }

    this.key_dict[key].freq += 1
    if (this.freq_dict[this.key_dict[key].freq] == null) {
      this.freq_dict[this.key_dict[key].freq] = new LinkedList()
      this.freq_dict[this.key_dict[key].freq].append(this.key_dict[key])
    } else this.freq_dict[this.key_dict[key].freq].append(this.key_dict[key])

    return this.key_dict[key].val
  }

  Set (key, value) {
    if (this.Get(key) != null) {
      this.key_dict[key].val = value
      return
    }

    if (this.size == this.cap) {
      delete this.key_dict[this.freq_dict[this.min_freq].head.key]
      if (this.freq_dict[this.min_freq] == null) { this.freq_dict[this.min_freq] = new LinkedList() } else { this.freq_dict[this.min_freq].del(this.freq_dict[this.min_freq].head) }
      if (this.freq_dict[this.min_freq].head == null) { delete this.freq_dict[this.min_freq] }
      this.size -= 1
    }

    this.min_freq = 1
    this.key_dict[key] = new LinkedListNode(key, value, this.min_freq)
    if (this.freq_dict[this.key_dict[key].freq] == null) {
      this.freq_dict[this.key_dict[key].freq] = new LinkedList()
      this.freq_dict[this.key_dict[key].freq].append(this.key_dict[key])
    } else this.freq_dict[this.key_dict[key].freq].append(this.key_dict[key])
    this.size += 1
  }

  printDict () {
    for (const k in this.key_dict) { console.log('(' + k + ', ' + this.key_dict[k].val + ')') }

    console.log('')
  }
}

// Driver code

const obj = new LfuStructure(2)
obj.Set(1, 1)
obj.Set(2, 2)

obj.Get(1)
obj.printDict()
obj.Set(3, 3)

obj.Get(2)
obj.printDict()
obj.Set(4, 4)
obj.Get(1)
obj.Get(3)
obj.Get(4)
obj.printDict()
