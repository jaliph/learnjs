let getFibonacci = function(n) {  
  let arr = [0, 1]
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  console.dir(arr)
  return arr[n];
};

let getFibonacciR= function(n) {
  if (n <= 1) return n
  return getFibonacciR(n - 1) + getFibonacciR(n - 2)
}


console.log(getFibonacci(5))
console.log(getFibonacciR(5))