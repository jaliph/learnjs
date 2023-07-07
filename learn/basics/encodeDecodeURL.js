// https://leetcode.com/problems/encode-and-decode-tinyurl/
const ALPHABETS = 'abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const BASE = ALPHABETS.length
const getId = (str) => {
  let num = ''
  for (let i = 0; i < 5; i++) {
    num += ~~(Math.random() * (str.length + 1))
  }
  return parseInt(num)
}

const encodeUtil = (num) => {
  if (num == 0) {
    return ALPHABETS[0]
  }

  let s = ""
  while (num > 0) {
    s += ALPHABETS[num % BASE]
    num = Math.floor(num / BASE)
  }
  return s.split('').reverse().join('')
}

const decodeUtil = (s) => {
  let num = 0
  for (let c of s) {
    num = num * BASE + ALPHABETS.indexOf(c)
  }
  return num
}

const dbMap = new Map()

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  console.log("URL - ", longUrl)
  let id = getId(longUrl)
  while (dbMap.has(id)) {
    id = getId(longUrl)
  }

  let uniqueId = encodeUtil(id)
  
  dbMap.set(id, longUrl)
  console.log('gen', uniqueId)
  return uniqueId
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  const decodedId = decodeUtil(shortUrl)
  return dbMap.get(decodedId)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */




console.log(decode(encode('google.com')))