

const isInterleavingBrute = (str1, str2, str3) => {
  const isInterleavingRecur = (str1, str2, str3, i, j, k) => {
    if (k == str3.length && i === str1.length && j === str2.length) {
      return true
    }

    if (k === str3.length) {
      return false
    }

    let d1 = false
    let d2 = false

    if (i < str1.length && str1[i] == str3[k]) {
      d1 = isInterleavingRecur(str1, str2, str3, i + 1, j, k + 1)
    }
    if (j < str2.length && str2[j] == str3[k]) {
      d2 = isInterleavingRecur(str1, str2, str3, i, j + 1, k + 1)
    }
    return d1 || d2
  }
  return isInterleavingRecur(str1, str2, str3, 0, 0, 0)
}


const isInterleaving = (str1, str2, str3) => {
  const s1 = str1.length
  const s2 = str2.length
  const s3 = str3.length

  if (s1 + s2 !== s3) {
    return false
  }

  const dp = Array(s1 + 1).fill().map(() => Array(s2 + 1).fill(false))

  // dp[0][0] = 1

  for (let i = 0; i <= s1; i++) {
    for (let j = 0; j <= s2; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true
      }

      // for the first row
      else if (i === 0 && j > 0 && str2[j - 1] === str3[i + j - 1] ) {
        dp[i][j] = dp[i][j - 1]
      }

      // for the first column
      else if (j === 0 && i > 0 && str1[i - 1] === str3[i + j - 1]) {
        dp[i][j] = dp[i - 1][j]
      }

      // if str1 and str3 is  match only
      else if (str1[i - 1] === str3[i + j - 1] && str2[j - 1] !== str3[i + j - 1]) {
        dp[i][j] = dp[i - 1][j]
      }

      // if str2 and str3 is  match only
      else if (str1[i - 1] !== str3[i + j - 1] && str2[j - 1] === str3[i + j - 1]) {
        dp[i][j] = dp[i][j - 1]
      }
      
      // if str1 and str2 both are match only
      else if (str1[i - 1] === str3[i + j - 1] && str2[j - 1] === str3[i + j - 1]) {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
      }
    }
  }

  // console.log(dp)
  return dp[s1][s2]
}



function main() {
  let s1, s2, s3;
  s1 = ["abd", "abc", "abcdef", "", "xyz", "abcdefghijklmnopqrstuvwxyz" , "a", "ab"];
  s2 = ["cef", "def", "mnop", "", "abc", "abcdefghijklmnopqrstuvwxyz", "", "bc"];
  s3 = ["adcbef", "abcccf", "mnaobcdepf", "", "abc", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "c", "babc"];

  // Let's uncomment this and check the effect of dynamic programming using memoization
  // s1.push("abcdefghijklmnopqrstuvwxyz");
  // s2.push("abcdefghijklmnopqrstuvwxyz");
  // s3.push("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz");

  for (var i = 0; i < s1.length; i++) {
      console.log("Test Case #", i + 1);
      console.log("The strings are:\ns1 = '" + s1[i] + "'\ns2 = '" + s2[i] + "'\ns3 = '" + s3[i] + "'");
      console.log("Is s3 a product of interleaving s1 and s2?");
      console.log(isInterleaving(s1[i], s2[i], s3[i]));
      console.log("-".repeat(100), "\n");;
  }
}


main();