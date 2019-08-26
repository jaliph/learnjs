function getAllPermutations(string) {
  let results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    console.log('-----1-----')
    console.log(charsLeft)
    var innerPermutations = getAllPermutations(charsLeft);
    console.log(innerPermutations)
    console.log('-----2-----')
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  console.dir(results)
  console.log('------3------')
  return results;
}

console.log(JSON.stringify(getAllPermutations('hello wor'), null, 2))
