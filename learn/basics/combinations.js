
const combination = (s) => {
  const N = 1 << s.length
  const result = ['']
  for (let i = 1; i < N; i++) {
    let substr = ''
    for (let j = 0; j < s.length; j++) {
      if ((1 << j) & i) {
        substr += s[j]
      }
    }
    result.push(substr)
  }

  return result
}

const main = () => {
  s = 'and'
  console.log('All the combinations ', combination(s))
}

main()
