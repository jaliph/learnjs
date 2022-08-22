let scoringOptions = function(n) {
  let arr = Array(n).fill(0)

  arr[0] = 1
  arr[1] = 1
  arr[2] = 2
  arr[3] = 3
  arr[4] = 6
  
  for (let i = 5 ; i <= n; i++ ) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 4]
  }

  console.log(arr)
  return arr[n];
};


// let scoringOptions = function (n) {
// 	// Setting up our base cases
	
// 	// We can not get a negative score, we return 0 for negative values
// 	if (n < 0) return 0;

// 	// There is only 1 way to reach a score of 0
// 	if (n == 0) return 1;

// 	// Recursively calculate the number of ways using the
// 	// recurrence relation we saw earlier
// 	return scoringOptions(n - 1) + scoringOptions(n - 2) + scoringOptions(n - 4);
// }


// let solverDPHelper = function (n, Vs) {
//   // We can not get a negative score, we return 0 for negative values
//   if (n < 0) return 0;

//   // Check if a solution already exists in the array
//   if (Vs[n] != -1) {
//       return Vs[n];
//   }

//   // Else, we recursively calculate the solution for the 
//   // given value and store it in our solution array
//   Vs[n] = solverDPHelper(n - 1, Vs) + solverDPHelper(n - 2, Vs)
//       + solverDPHelper(n - 4, Vs);

//   return Vs[n];

// }

// // Scoring options are 1, 2, and 4
// let scoringOptions = function (n) {
//   // Initializing our solution array
//   let Vs = [];
//   for (let i = 0; i < n + 1; i++) {
//       Vs.push(-1);
//   }

//   // Set up the base case, 1 way to score 0
//   Vs[0] = 1;

//   // Pass our array to the helper function
//   return solverDPHelper(n, Vs)
// }


scoringOptions(10)