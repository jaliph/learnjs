String.prototype.compress = function (asArray) {
  'use strict'
  // Build the dictionary.
  asArray = (asArray === true)
  let i
  const dictionary = {}
  const uncompressed = this
  let c
  let wc
  let w = ''
  const result = []
  let ASCII = ''
  let dictSize = 256
  for (i = 0; i < 256; i += 1) {
    dictionary[String.fromCharCode(i)] = i
  }

  for (i = 0; i < uncompressed.length; i += 1) {
    c = uncompressed.charAt(i)
    wc = w + c
    // Do not use dictionary[wc] because javascript arrays
    // will return values for array['pop'], array['push'] etc
	   // if (dictionary[wc]) {
    if (dictionary.hasOwnProperty(wc)) {
      w = wc
    } else {
      result.push(dictionary[w])
      ASCII += String.fromCharCode(dictionary[w])
      // Add wc to the dictionary.
      dictionary[wc] = dictSize++
      w = String(c)
    }
  }

  // Output the code for w.
  if (w !== '') {
    result.push(dictionary[w])
    ASCII += String.fromCharCode(dictionary[w])
  }
  return asArray ? result : ASCII
}

String.prototype.decompress = function () {
  'use strict'
  // Build the dictionary.
  let i; let tmp = []
  const dictionary = []
  let compressed = this
  let w
  let result
  let k
  let entry = ''
  let dictSize = 256
  for (i = 0; i < 256; i += 1) {
    dictionary[i] = String.fromCharCode(i)
  }

  if (compressed && typeof compressed === 'string') {
    // convert string into Array.
    for (i = 0; i < compressed.length; i += 1) {
      tmp.push(compressed[i].charCodeAt(0))
    }
    compressed = tmp
    tmp = null
  }

  w = String.fromCharCode(compressed[0])
  result = w
  for (i = 1; i < compressed.length; i += 1) {
    k = compressed[i]
    if (dictionary[k]) {
      entry = dictionary[k]
    } else {
      if (k === dictSize) {
        entry = w + w.charAt(0)
      } else {
        return null
      }
    }

    result += entry

    // Add w+entry[0] to the dictionary.
    dictionary[dictSize++] = w + entry.charAt(0)

    w = entry
  }
  return result
}

const str = 'skdjfklsjdfkljdslkfjlksjdlkfjlksdjfkljslkjdflkjslkdjflsjdlkfjlksjdflksjdljflsdjlkfjlsjflslkdflksdjlfdlkfjlksdjlkfjlksdjfkljdslkjflksdjfjko8939832983irnf&*&((H(H|||||||||||||||||||dfggdfhgljhfjdlhgjlhdjfghjdfhjlgdfghlkhlfgdhlkghkfldghlkdfglhgldgdfhlkgljdhfgljr9-0r9u23h082hf820f8h820hfc8h08fh082f0f009f2|||||||||||||||||||hwuehoodhfouhsouhfouwh9329829220bb023b0b03b'.repeat(1000)

console.log(str === str.compress().decompress())
