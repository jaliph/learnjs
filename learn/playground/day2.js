
function duplicates(arr, n) {
 
  // Increment array elements by 1
  for (let i = 0; i < n; i++) {
      arr[i] += 1;
  }

  // result vector
  let res = new Array();

  // count variable for count of
  // largest element
  let count = 0;

  for (let i = 0; i < n; i++) {

      // Calculate index value
      let index = Math.abs(arr[i]) > n ? Math.abs(arr[i]) / (n + 1)
          : Math.abs(arr[i]);

      // Check if index equals largest element value
      if (index == n) {
          count++;
          continue;
      }

      // Get element value at index
      let val = arr[index];

      // Check if element value is negative, positive
      // or greater than n
      if (val < 0) {
          res.push(index - 1);
          arr[index] = Math.abs(arr[index]) * (n + 1);
      }
      else if (val > n)
          continue;
      else
          arr[index] = -arr[index];
  }

  // If largest element occurs more than once
  if (count > 1)
      res.push(n - 1);

  if (res.length == 0)
      res.push(-1);
  else
      res.sort(function (a, b) { return a - b });

  return res;
}

// Driver Code
let numRay = [1, 2, 2, 3];
let n = numRay.length;

let ans = duplicates(numRay, n);
for (let i = 0; i < ans.length; i++)
  console.log(ans[i]);
