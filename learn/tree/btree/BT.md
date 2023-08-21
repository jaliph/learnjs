### Binary Tree
Trees are hierarchical data structures. A tree whose elements have at most 2 children is called a binary tree.


#### Properties
1. Maximum number of node at level (l) = 2<sup>l</sup> or 2^l
2. Minimum height(h) of tree for Node (N) = log<sub>2</sub>(N+1) - 1 or log2N
3. Minimum level(l) for leave node(L) = |log<sub>2</sub>L| + 1
4. l = log<sub>2</sub>L + 1
5. L = I + 1

#### Handshake and lemma

![\sum_{u \epsilon v } deg(u) = 2 | E |](https://latex.codecogs.com/gif.latex?\sum_{u&space;\epsilon&space;v&space;}&space;deg(u)&space;=&space;2&space;|&space;E&space;|)

#### Structure of tree node
```
class TreeNode {
    constructor(val,left,right) {
        this.val = val
        this.left = left
        this.right = right
    }
}
```


#### Traversal
1. PreOrder

        a. recurssion
        b. itration(using stack)
2. PostOrder
3. InOrder
4. Level Order
5. Diagonal traversal

#### View
1. left view
2. right view
3. Top view
4. bottom view

#### Construction
1. From preorder and inorder
2. From postorder and inorder
3. From preorder and postorder

#### LCA (Least common ancestor)
1. Find distance between 2 nodes.

#### Mirror
1. Construct Mirror of tree
2. Are two tree symmetric or not


#### Concepts Uses
The above all the method uses concepts like recursion , iteration, stack and queue.


#### Problems 
1. Largest Independent Set Problem (Given a Binary Tree of size N, find the size of the Largest Independent Set(LIS) in it. A subset of all tree nodes is an independent set if there is no edge between any two nodes of the subset. Your task is to complete the function LISS(), which finds the size of the Largest Independent Set.)
2. Minimum element in BST 
3. Vertical Traversal of Binary Tree 
4. Diagonal traversal of Binary tree
5. boundary traversal of binary tree
6. Find distance between two nodes in the given Binary tree for Q queries



#### Concepts
1. Concept 1(maxPathSum)

        Pass max value in traversal
        While traversal check right and left find max between those to and return max(returnLeft,returnRight) + data
        Update the max if (returnLeft + returnRight + data) is greater than max



