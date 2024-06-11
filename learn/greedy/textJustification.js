// https://leetcode.com/problems/text-justification/
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function (words, maxWidth) {
  const res = []
  let line = []; let len = 0

  for (const w of words) {
    // if cannot add 1 more word
    if (line.length + len + w.length > maxWidth) {
      const extraSpaces = maxWidth - len
      const spaces = ~~(extraSpaces / Math.max(1, line.length - 1)) // integer division
      let remainder = extraSpaces % Math.max(1, line.length - 1)

      for (let j = 0; j < Math.max(1, line.length - 1); j++) {
        line[j] += ' '.repeat(spaces)
        if (remainder) {
          line[j] += ' '
          remainder -= 1
        }
      }
      res.push(line.join(''))
      line = [], len = 0
    }

    // add the word
    line.push(w)
    len += w.length
  }

  last_line = line.join(' ')
  const extraSpaces = maxWidth - last_line.length
  last_line += ' '.repeat(extraSpaces)
  res.push(last_line)

  return res
}

const main = () => {
  words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], maxWidth = 16
  console.log('Done with Text justification')
  console.log(fullJustify(words, maxWidth))
}

main()
