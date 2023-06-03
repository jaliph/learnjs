
/**
 * 
Special Paths

You are given an undirected graph with n nodes numbered 1 to n. Every node i has a value  a[i-1] assigned to it.

The tree is given as an array of edges where edges[i] = [ui, vi] is a bidirectional edge between node ui and node vi .

The value of a simple path between node u and v is as follows:

    The maximum absolute difference between the values of adjacent nodes present in the simple path.

Return the minimum possible path value of any simple paths between start and end nodes.

Constraints:

    1<= n <= 10^5

    n-1 <= edges.length <= min( n*(n-1)/2 , 10^5)

    1<= ui,vi <=n

    0 <= ai <= 10^4

    Input : n = 7,a = {56,32,67,29,16,6,64}, edges = {{5,3},{4,5},{5,1},{5,2}}, start = 1, end = 2
    Output : 40

Expected Time Complexity: O( (n+m)*logN) ), where m is number of edges

**/


// Binary Search in the Network with Disjoint Sets
// Apply Djisktra