
const solveCoinChange = (den, amount) => {

  if(amount < 0){
    return 0;
  }

  let solution = Array(amount + 1).fill(0)
  
  solution[0] = 1


  for (let i = 0; i < den.length; i++) {
    for(let j = den[i] ; j <= amount; j++ ) {
      solution[j] = solution[j] + solution[j - den[i]]
    }
  }
  
  console.dir(solution)
  return solution[amount]
}

  
let denominations1 = [1, 2, 3];
let amount1 = 6;
let result1 = solveCoinChange(denominations1, amount1);

console.log("1." + String(amount1) + ") = " + String(result1));
console.log("------------------------------------------------------------------------------------------------------\n");

let denominations2 = [1, 2, 5];
let amount2 = 7;
let result2 = solveCoinChange(denominations2, amount2);

console.log("2." + String(amount2) + ") = " + String(result2))
console.log("------------------------------------------------------------------------------------------------------\n");