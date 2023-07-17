// total number of permutations of 0 - 9
// 1. which contain 13, 49, 34, 23 in the numbers
// 2. which doesn't contain 13, 49, 34, 23 in the numbers

// P represents permutations
/*
= P13 + P49 + P34 + P23
- P13 49 - P 13 35 - P13 34 - P13 23 - P49 23 - P49 34 - P 34 23
+ P13 49 34  + P13 49 23 + P 13 34 23 + P49 34 23
- P13 49 34 23
*/

const findPermutations = () => {
  // totalPermuts = 10!
  // P13 - 9!


}

const main = () => {
  console.log('Total number of permutations of 0 - 9 containing 13,49, 34, 23', findPermutations())
}

main()