### Applications

1. check odd / even
n & 1 == 1 // odd
n & 1 == 0 // even

2. Get ith Bit
n & (1 << i)
(n >> i) & 1

3. Clear nth Bit
n & ~(1 << i)

4. Flip ith bit
n ^ (1 << i)

5. Set the ith bit
n | (1 << i)

6. Update the ith bit - user can send 1 or 0
n & ~ (1 << i)  // clear the ith bit
n | (valueFromUser << i)

7. clear last n bits
// 1111 << i ~= 1100
n & (-1 << i)

8. clear bits in range (j, i)
// 11110000000111
    (j+1)    (2**i-1) ~= (1 << i) - 1
n & ((-1 << (j + 1)) |  ((1 << i) - 1))

9. Power of 2
(n & (n - 1)) == 0