
const TowerOfHanoi = (n, from, helper, to, count) => {
  if (n === 0) return 0
  count = TowerOfHanoi(n - 1, from, to, helper, count)
  count++
  console.log('Step: ', n, ' ', from, ' move to ', to)
  count += TowerOfHanoi(n - 1, helper, from, to, count)
  return count
}

const driver = () => {
  const n = 3
  let count = 0
  count = TowerOfHanoi(n, 'A', 'B', 'C', count)
  console.log('Total moves =', count)
}

driver()
