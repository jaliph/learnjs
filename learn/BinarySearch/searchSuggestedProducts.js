// https://leetcode.com/problems/search-suggestions-system/

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
let suggestedProducts = function (products, searchWord) {
  products.sort()
  let l = 0
  let r = products.length - 1

  const results = []

  for (let i = 0; i < searchWord.length; i++) {
    while (l <= r) {
      if (products[l][i] === searchWord[i]) {
        break
      }
      l++
    }

    while (l <= r) {
      if (products[r][i] === searchWord[i]) {
        break
      }
      r--
    }

    // console.log(l, r, i, searchWord[i])
    if (r - l + 1 <= 3) {
      results.push(products.slice(l, r + 1))
    } else {
      results.push(products.slice(l, l + 3))
    }
  }

  return results
}

const main = () => {
  products = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'], searchWord = 'mouse'
  console.log('Search results for every entry are : ', suggestedProducts(products, searchWord))

  products = ['havana'], searchWord = 'havana'
  console.log('Search results for every entry are : ', suggestedProducts(products, searchWord))
}

main()
