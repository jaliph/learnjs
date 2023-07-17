
const digitDp = (str) => {
  const digitDPRecur = (ans, index, last) => {
    // base
    if (index === str.length) {
      console.log(ans)
      return
    }

    // recur
    const till = last ? Number(str[index]) : 9

    for (let i = 0; i <= till; i++) {
      digitDPRecur(ans + '' + i, index + 1, (last && (i == till)))
    }
  }
  return digitDPRecur('', 0, true)
}

const main = () => {
  const str = '14'
  console.log('All the numbers is ', digitDp(str))
}

main()
