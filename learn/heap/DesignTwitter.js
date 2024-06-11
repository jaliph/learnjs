class Heap {
  constructor (comp) {
    this.heap = []
    this.size = 0
    this.comparator = comp || function (a, b) { return a - b }
  }

  swap (i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  peek () {
    return this.heap[0]
  }

  pop () {
    if (this.size > 0) {
      const data = this.heap[0]
      this.heap[0] = this.heap[this.size - 1]
      this.heap.pop()
      this.percolateDown(0)
      this.size--
      return data
    }
  }

  push (data) {
    this.heap.push(data)
    this.size++
    this.percolateUp(this.heap.length - 1)
  }

  percolateDown (i) {
    const leftChild = (i * 2) + 1
    const rightChild = (i * 2) + 2

    const parent = i
    if (leftChild < this.heap.length && this.comparator(this.heap[i], this.heap[leftChild]) > 0) {
      i = leftChild
    }
    if (rightChild < this.heap.length && this.comparator(this.heap[i], this.heap[rightChild]) > 0) {
      i = rightChild
    }

    if (i != parent) {
      this.swap(i, parent)
      this.percolateDown(i)
    }
  }

  percolateUp (i) {
    const parent = Math.floor((i - 1) / 2)
    if (parent >= 0 && this.comparator(this.heap[parent], this.heap[i]) > 0) {
      this.swap(parent, i)
      this.percolateUp(parent)
    }
  }
}

const Twitter = function () {
  this.userIds = new Map()
  this.followList = new Map()
  this.time = 0
}

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (this.userIds.has(userId)) {
    this.userIds.get(userId).push([tweetId, this.time++])
  } else {
    const h = new Heap((a, b) => b[1] - a[1])
    h.push([tweetId, this.time++])
    this.userIds.set(userId, h)
  }
  // console.log(this.userIds.get(userId))
}

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const circle = this.followList.get(userId) || new Set()
  circle.add(userId)
  const minHeap = new Heap((a, b) => a[1] - b[1])
  for (const i of circle) {
    const iTweets = []
    let k = 0
    while (this.userIds.get(i)?.size && k++ < 10) {
      const tweet = this.userIds.get(i).pop()
      iTweets.push(tweet)
      minHeap.push(tweet)
      if (minHeap.size > 10) {
        minHeap.pop()
      }
    }
    for (const t of iTweets) {
      this.userIds.get(i).push(t)
    }
  }
  const newsFeed = []
  while (minHeap.size) {
    newsFeed.push(minHeap.pop()[0])
  }
  return newsFeed.reverse()
}

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.userIds.has(followerId)) {
    this.userIds.set(followerId, new Heap((a, b) => b[1] - a[1]))
  }

  if (!this.userIds.has(followeeId)) {
    this.userIds.set(followeeId, new Heap((a, b) => b[1] - a[1]))
  }

  if (!this.followList.has(followerId)) {
    this.followList.set(followerId, new Set())
  }
  this.followList.get(followerId).add(followeeId)
}

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  this.followList.get(followerId).delete(followeeId)
}

const obj = new Twitter()
obj.postTweet(1, 5)
console.log(obj.getNewsFeed(1))
obj.follow(1, 2)
obj.postTweet(2, 6)
console.log(obj.getNewsFeed(1))
obj.unfollow(1, 2)
console.log(obj.getNewsFeed(1))
// obj.follow(2,1)
// obj.follow(3,1)

// obj.getNewsFeed(3)
// obj.unfollow(3,1)
// obj.getNewsFeed(3)

// var param_2 = obj.getNewsFeed(userId)
// obj.follow(followerId,followeeId)
// obj.unfollow(followerId,followeeId)
