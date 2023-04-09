
const canSegmentString = function (inputString, dictionary, memoise) {
  for (let i = 0; i < inputString.length; i++) {
    const first = inputString.substr(0, i)

    if (dictionary.indexOf(first) >= 0) {
      const second = inputString.substr(i)
      if (second === '') {
        return true
      }
      if (memoise.indexOf(second) >= 0) {
        return true
      }
      if (dictionary.indexOf(second) >= 0) {
        memoise.push(second)
        return true
      }
      if (canSegmentString(second, dictionary, memoise)) {
        memoise.push(second)
        return true
      }
    }
  }
  return false
}

const s = 'hellonow'
const dictionary = ['hello', 'hell', 'on', 'now']

console.log(canSegmentString(s, dictionary, []))
