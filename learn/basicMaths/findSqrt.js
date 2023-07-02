
// (√x-√x)**2  = 0
// (y-√x)2 => y2 – 2y√x + x = 0

// => √x = (y2 + x) / 2y
// => √x = (y + x/y) / 2

const findSqrt = (x) => {
  if (x < 2) {
    return 1
  }

  let y = x
  let z = (y + x / y) / 2

  const PRECISION = 0.000000001

  while (Math.abs(z - y) >= PRECISION) {
    y = z
    z = (y + x / y) / 2
  }

  return z
}




const main = () => {
  for (let i = 1; i <= 64; i++) {
    console.log(`The Math.sqrt of ${i} is `, findSqrt(i))
  }
}

main()