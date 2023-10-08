/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let freqMap = nums.reduce((prev, curr) => {
        prev.set(curr, (prev.get(curr) || 0) + 1)
        return prev
    }, new Map())
    
    console.log(freqMap)
    let ops = 0
    
    for (let [k, v] of freqMap) {
        if (v === 1) {
            return -1
        }
        ops += Math.ceil(v / 3)
    }
    
    return ops
};


console.log(minOperations([2,3,3,2,2,4,2,3,4]))
console.log(minOperations([14,12,14,14,12,14,14,12,12,12,12,14,14,12,14,14,14,12,12]))
console.log(minOperations([19,19,19,19,19,19,19,19,19,19,19,19,19]))