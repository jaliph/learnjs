// https://leetcode.com/problems/push-dominoes/

/**
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = function (dominoes) {
  const doms = dominoes.split('')

  const q = []
  let d
  for (let i = 0; i < doms.length; i++) {
    d = doms[i]
    if (d !== '.') q.push([d, i])
  }

  let k = 0
  while (k < q.length) {
    const [domino, i] = q[k++]

    if (domino === 'L') {
      if (i > 0 && doms[i - 1] === '.') {
        q.push(['L', i - 1])
        doms[i - 1] = 'L'
      }
    } else if (domino === 'R') {
      if (i + 1 < dominoes.length && doms[i + 1] === '.') {
        if (i + 2 < dominoes.length && doms[i + 2] === 'L') {
          k++ // q.shift()
        } else {
          q.push(['R', i + 1])
          doms[i + 1] = 'R'
        }
      }
    }
  }
  return doms.join('')
}

const main = () => {
  dominoes = 'RR.L'
  console.log('Final state is .. ', pushDominoes(dominoes))

  dominoes = '.L.R...LR..L..'
  console.log('Final state is .. ', pushDominoes(dominoes))
}

main()
