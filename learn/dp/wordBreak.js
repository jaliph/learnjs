const wordBreakBrute = (s, dict) => {
  if (s.length == 0) return []

  const result = []

  for (const i of dict) {
    // the word in the dict is not the first word in sentence
    if (s.indexOf(i) !== 0) continue

    if (s === i) result.push(i)

    const items = ''
    const restoftheSentence = wordBreak(s.substring(i.length, s.length), dict)
    for (const j of restoftheSentence) {
      result.push(i + ' ' + j)
    }
  }
  return result
}

const wordBreakMemoise = (s, dict) => {
  const wordBreakRecur = (s, dict, map) => {
    if (s.length == 0) return []

    if (map[s]) {
      return map[s]
    }

    const result = []

    for (const i of dict) {
      // the word in the dict is not the first word in sentence
      if (s.indexOf(i) !== 0) continue

      if (s === i) result.push(i)

      const items = ''
      const restoftheSentence = wordBreakRecur(s.substring(i.length, s.length), dict, map)
      for (const j of restoftheSentence) {
        result.push(i + ' ' + j)
      }
    }
    map[s] = result
    return map[s]
  }
  return wordBreakRecur(s, dict, {})
}

const wordBreak = (str, dict) => {
  const dp = Array(str.length + 1).fill(0).map(() => [])
  // const dp = Array(str.length + 1).fill([])
  // console.log(dp)

  dp[0] = ['']
  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j < i; j++) {
      const prefix = str.slice(j, i)

      if (dict.indexOf(prefix) >= 0) {
        dp[j].forEach(substrings => {
          dp[i].push((substrings + ' ' + prefix).trim())
        })
      }
    }
  }
  return dp[str.length]
}

const main = function () {
  const s = ['vegancookbook', 'catsanddog', 'highwaycrash',
    'screamicecream', 'educativecourse']

  const wordDict = ['v', 'vegan', 'cookbook', 'vegancookbook', 'veg', 'gan', 'eg', 'eganc', 'ookboo',
    'kc', 'ats', 'an', 'ddog', 'ddogh', 'cookb', 'cook', 'b', 'anco', 'ancoo', 'ook', 'book',
    'kbook', 'kbookc', 'books', 'cats', 'cat', 'and', 'andd', 'sand', 'sanddoghigh', 'catsanddog',
    'doghigh', 'sandd', 'og', 'dog', 'hi', 'gh', 'ghway', 'ghw', 'ayc', 'rash', 'ra', 'sh', 'highways',
    'highway', 'high', 'doghigh', 'way', 'cra', 'c', 'waycrash', 'crash', 'crashp', 'crashpineapple',
    'vegancookbookcats', 'anddoghighwaycrashpineapplepenapplescrea', 'anddoghighwaycrashpineapplepenapple',
    'vegancookbookcatsanddog', 'vegancookbookcatsanddoghighway', 'catsanddoghighway', 'crashpineapplepenapplescrea',
    'crashpineapplepenapple', 'applepenapple', 'pineapplepenapplescre', 'pineapplepenapple', 'a', 'crashpine', 'inea',
    'app', 'pena', 'en', 'ine', 'plep', 'pe', 'na', 'napplesc', 'ena', 'ple', 'le', 'penap', 'lepe', 'ppl', 'pples', 'pple',
    'pine', 'pin', 'nap', 'napp', 'eapple', 'apple', 'apples', 'pen', 'penapple', 'penapples', 'vegancookbookcatsanddoghighway',
    'vegancookbookcatsanddoghighwaycrashpineapplepenapplescrea', 'vegancookbookcatsanddoghighwaycrashpineapplepenapplescream']

  // You can uncomment the line below and check how this recursive solution causes a time-out.
  // s.push("vegancookbookcatsanddoghighwaycrashpineapplepenapplescream");

  console.log('The list of words we can use to break down the strings are: \n\n' + (wordDict))
  console.log('-'.repeat(100))

  for (let i = 0; i < s.length; i++) {
    console.log(
          `Test Case #${i + 1}`,
          `\n\nThe possible strings from the string '${s[i]}' are the following combinations:`
    )
    console.log('\n' + (wordBreak(s[i], wordDict)))
    console.log('-'.repeat(100))
  }
}

main()
