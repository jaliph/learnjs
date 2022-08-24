const findSI = function(m, n, p) {
  let findSIRecur = (m, n, p, i, j, k) => {
    if (i == m.length && j == n.length && k == p.length) {
      return true
    }

    if (k == p.length) {
      return false
    }

    let b1 = false, b2 = false

    if (i < m.length && m[i] == p[k]) {
      b1 = findSIRecur(m, n, p, i + 1, j, k + 1)
    }

    if (j < n.length && n[j] == p[k]) {
      b2 = findSIRecur(m, n, p, i, j + 1, k + 1)
    }

    return b1 || b2
  }
  return findSIRecur(m, n , p , 0, 0, 0);
};

const findSIDP = (m, n, p) => {
  const dp = Array(m.length + 1).fill(false).map(() => Array(n.length + 1).fill(false))

  if (m.length + n.length != p.length) return false;

  for (let mIndex = 0; mIndex <= m.length; mIndex++) {
    for (let nIndex = 0; nIndex <= n.length; nIndex++) {
      if (mIndex == 0 && nIndex == 0) {
        dp[mIndex][nIndex] = true
      } else if (mIndex == 0 && n[nIndex - 1] == p[mIndex + nIndex - 1] ) {
        dp[mIndex][nIndex] = dp[mIndex][nIndex - 1]
      } else if (nIndex == 0 && m[mIndex - 1] == p[mIndex + nIndex - 1]) {
        dp[mIndex][nIndex] = dp[mIndex - 1][nIndex]
      } else {
        
        if (mIndex > 0 && m[mIndex - 1] === p[mIndex + nIndex - 1]) {
          dp[mIndex][nIndex] = dp[mIndex - 1][nIndex];
        }

        if (nIndex > 0 && n[nIndex - 1] === p[mIndex + nIndex - 1]) {
          dp[mIndex][nIndex] = dp[mIndex][nIndex] || dp[mIndex][nIndex - 1];
        }

      }
    }
  }
  return dp[m.length][n.length];
}


console.log(`String leterleaving: ---> ${findSI('abd', 'cef', 'abcdef')}`);
console.log(`String leterleaving: ---> ${findSI('abd', 'cef', 'adcbef')}`);
console.log(`String leterleaving: ---> ${findSI('abc', 'def', 'abdccf')}`);
console.log(`String leterleaving: ---> ${findSI('abcdef', 'mnop', 'mnaobcdepf')}`);

console.log(`String leterleaving: ---> ${findSIDP('abd', 'cef', 'abcdef')}`);
console.log(`String leterleaving: ---> ${findSIDP('abd', 'cef', 'adcbef')}`);
console.log(`String leterleaving: ---> ${findSIDP('abc', 'def', 'abdccf')}`);
console.log(`String leterleaving: ---> ${findSIDP('abcdef', 'mnop', 'mnaobcdepf')}`);