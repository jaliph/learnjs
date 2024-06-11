/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
let hammingDistance = function (x, y) {
  // XOR definition is:
  // -- 1 if bits are different
  // -- 0 if bits are the same
  let xor = x ^ y

  // Count the number of '1' bits:
  let count = 0
  while (xor > 0) {
    // Get the latest bit:
    count += xor & 1

    // Remove the latest bit
    xor >>= 1
  }

  return count
};
