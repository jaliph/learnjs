
// https://leetcode.com/problems/time-based-key-value-store/


var TimeMap = function() {
  this.store = new Map()
  this.binaryInsert = (arr, data, timestamp) => {
    let l = 0
    let r = arr.length
    let mid
    while (l < r) {
      mid = l + ~~((r - l) / 2)

      if (timestamp > arr[mid][0]) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    arr.splice(l, 0, [timestamp, data])
  }

  this.binarySearch = (arr, timestamp) => {
    let l = 0 
    let r = arr.length - 1

    let res
    let mid
    while (l <= r) {
      mid = l + ~~((r - l) / 2)
      
      if (timestamp >= arr[mid][0]) {
        res = arr[mid][1]
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return res
  }
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (this.store.has(key)) {
    this.store.get(key).push([timestamp, value])
  } else {
    this.store.set(key, [[timestamp, value]])
  }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  if (this.store.has(key)) {
    return this.binarySearch(this.store.get(key), timestamp) || ""
  } else {
    return ""
  }
};



let timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
console.log(timeMap.get("foo", 1))       // return "bar"
console.log(timeMap.get("foo", 3))    // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5); 


console.log(timeMap.store)