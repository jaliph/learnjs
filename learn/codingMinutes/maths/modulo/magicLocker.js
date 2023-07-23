// https://www.spoj.com/problems/LOCKER/

const MOD = 10**9+7

const mul = (a, b) => {
  return ((a % MOD) * (b % MOD)) % MOD
}

const power = (a, b) => {
  let res = 1
  while (b) {
    if (b & 1) {
      res = mul(res, a)
      res = res % MOD
    }
    a = mul(a, a)
    a = a % MOD
    b = b >> 1
  }
  return res
}

const maxThatCanbeMade = (num) => {
  if (num < 3) {
    return num  
  } else if (num % 3 === 0) {
    return power(3, (num / 3))
  } else if (num % 3 === 1) {
    num = num - 4
    return 4 * power(3, (num / 3))
  } else if (num % 3 === 2) {
    return 2 * power(3, ~~(num / 3))
  }
}

const main = () => {
  nums = [4, 5]
  for (let i = 0; i < nums.length; i++) {
    console.log('The max that can be made is ', maxThatCanbeMade(nums[i]))
  }

}

main()