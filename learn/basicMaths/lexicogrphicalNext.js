
// https://dev.to/seanpgallivan/solution-next-permutation-421n

const nextPermutation = function (N) {
  const swap = (i, j) =>
    [N[i], N[j]] = [N[j], N[i]]

  const len = N.length - 1; let i
  for (i = len - 1; N[i] >= N[i + 1];) i--
  let j = i + 1; let k = len
  console.log(i)
  while (j < k) swap(j++, k--)
  if (i >= 0) {
    for (j = i + 1; N[i] >= N[j];) j++
    swap(i, j)
  }
}

console.log(nextPermutation([1, 2, 2, 2, 3]))
console.log(nextPermutation([1, 5, 1]))
console.log(nextPermutation([1, 1, 5]))
