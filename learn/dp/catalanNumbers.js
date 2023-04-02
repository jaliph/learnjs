
const catalanBrute = (n) => {
  // console.dir(n)
  if (n <= 0) return 1

  let sum = 0;
  // must go till n - 1
  for (let i = 0; i < n ; i++) {
    sum += catalan(i) * catalan(n - i - 1)
  }

  return sum
}

const catalan = (n) => {
  const dp = Array(n + 1).fill(0)

  dp[0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1] 
    }
  }

  return dp[n]
}





// Driver code to test the above function
function main(){
  var nList = [0,1,2,4,6];
  
  // Let's uncomment this to see the benefit of using dynamic programming with tabulation
  // nList.push(22);

  for(var i =0; i<nList.length ; i++){
    console.log(i+1 + ".\tn: " + nList[i]);
    console.log("\n\tnth catalan number: "+ catalan(nList[i]));
    console.log("-".repeat(100));
  }
}

main(); 