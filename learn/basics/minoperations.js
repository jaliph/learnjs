// https://leetcode.com/problems/minimum-replacements-to-sort-the-array/

function minimumReplacement(A) {
  let x = 1e9, res = 0, k
  for (let i = A.length - 1; i >= 0; --i) {
      k = Math.floor((A[i] + x - 1) / x)
      x = Math.floor(A[i] / k)
      
      res += k - 1;
      console.log("k -->", k, "x -->", x, "res --> ", res) ;

  }
  return res;
}


console.log( "Output --> ", minimumReplacement([3, 7, 8, 9, 5, 3]))

