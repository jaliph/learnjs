// https://leetcode.com/problems/seat-reservation-manager/

/**
 * @param {number} n
 */
const SeatManager = function (n) {
  this.seats = Array(n).fill(0).map((val, i) => n - i)
}

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  return this.seats.pop()
}

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  binaryInsertion(this.seats, seatNumber)
}

const binaryInsertion = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (arr[mid] < target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  arr.splice(left, 0, target)
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

const obj = new SeatManager(5)
console.log(obj)
console.log(obj.reserve())
console.log(obj.reserve())
console.log(obj)
console.log(obj.unreserve(1))
console.log(obj)
console.log(obj.unreserve(2))
console.log(obj)
