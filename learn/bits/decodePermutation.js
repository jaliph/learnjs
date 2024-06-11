// https://leetcode.com/problems/decode-xored-permutation

// For example, original list is[a1, a2, a3, a4, a5], which means encoded list is
//  [a1^a2, a2^a3, a3^a4, a4^a5].
// We can get a1^a2, a1^a3, a1^a4, a1^a5 after iterating encoded list.
// And we can compute a1^a2^a3^a4^a5 beforehand.
// Then by xor all of them we can get the first element a1:
// (a1^a2) ^ (a1^a3) ^ (a1^a4) ^ (a1^a5) ^ (a1^a2^a3^a4^a5) = a1

/**
 * @param {number[]} encoded
 * @return {number[]}
 */
const decode = function (encoded) {
  const list = Array.from(encoded)

  for (let i = 1; i < list.length; i++) {
    list[i] = list[i] ^ list[i - 1]
  }

  let allXor = 0
  for (let i = 1; i <= encoded.length + 1; i++) {
    allXor = allXor ^ i
  }

  const firstElement = list.reduce((a, b) => a ^ b, 0) ^ allXor

  const result = [firstElement]
  for (const num of encoded) {
    result.push(num ^ result.at(-1))
  }
  return result
}

const main = () => {
  nums = [3, 1]
  console.log('Decoded array is ', decode(nums))
}

main()
