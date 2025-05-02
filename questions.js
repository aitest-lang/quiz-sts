const questions = [
    {
        "question": "The Bellman-Ford algorithm is used to find the shortest paths from a single source vertex in a weighted graph. Which of the following is a key feature of this algorithm?",
        "options": [
            "It can only handle graphs with positive edge weights.",
            "It can detect negative weight cycles.",
            "It has a time complexity of O(V log V).",
            "It uses a priority queue."
        ],
        "correctAnswer": "It can detect negative weight cycles."
    },
    {
        "question": "What is the time complexity of the Bellman-Ford algorithm for a graph with V vertices and E edges?",
        "options": [
            "O(V + E)",
            "O(V log V)",
            "O(E log V)",
            "O(V * E)"
        ],
        "correctAnswer": "O(V * E)"
    },
    {
        "question": "How many iterations does the Bellman-Ford algorithm perform to find the shortest paths?",
        "options": [
            "V iterations",
            "V - 1 iterations",
            "E iterations",
            "E - 1 iterations"
        ],
        "correctAnswer": "V - 1 iterations"
    },
    {
        "question": "If the Bellman-Ford algorithm detects a negative weight cycle, what does this indicate?",
        "options": [
            "There are no paths from the source to some vertices.",
            "There is an error in the input graph.",
            "The shortest paths are undefined due to the cycle.",
            "The graph is disconnected."
        ],
        "correctAnswer": "The shortest paths are undefined due to the cycle."
    },
    {
        "question": "Which of the following scenarios is the Bellman-Ford algorithm best suited for?",
        "options": [
            "Graphs with only positive edge weights.",
            "Graphs with a large number of vertices and edges.",
            "Graphs with negative edge weights or the possibility of negative weight cycles.",
            "Graphs where the shortest path needs to be found very quickly."
        ],
        "correctAnswer": "Graphs with negative edge weights or the possibility of negative weight cycles."
    },
    {
        "question": "What data structure is primarily used in the Breadth-First Search (BFS) algorithm?",
        "options": [
            "Stack",
            "Queue",
            "Priority Queue",
            "Linked List"
        ],
        "correctAnswer": "Queue"
    },
    {
        "question": "Which of the following describes the order in which BFS visits nodes in a graph?",
        "options": [
            "Depth-first",
            "Level-by-level",
            "Randomly",
            "Inorder"
        ],
        "correctAnswer": "Level-by-level"
    },
    {
        "question": "What is the time complexity of the Breadth-First Search (BFS) algorithm for a graph represented as an adjacency list?",
        "options": [
            "O(V log V)",
            "O(E log V)",
            "O(V + E)",
            "O(V * E)"
        ],
        "correctAnswer": "O(V + E)"
    },
    {
        "question": "If a graph is disconnected and you run BFS from a starting node, what will happen?",
        "options": [
            "BFS will visit all nodes in the graph.",
            "BFS will only visit the nodes in the connected component of the starting node.",
            "BFS will throw an exception.",
            "BFS will enter an infinite loop."
        ],
        "correctAnswer": "BFS will only visit the nodes in the connected component of the starting node."
    },
    {
        "question": "Which of the following is a common application of Breadth-First Search (BFS)?",
        "options": [
            "Finding the shortest path in a weighted graph.",
            "Detecting cycles in a directed graph.",
            "Finding the shortest path in an unweighted graph.",
            "Sorting a list of elements."
        ],
        "correctAnswer": "Finding the shortest path in an unweighted graph."
    },
    {
        "question": "What data structure forms the basis of a Binomial Heap?",
        "options": [
            "Binary Search Trees",
            "Linked Lists",
            "Binomial Trees",
            "Arrays"
        ],
        "correctAnswer": "Binomial Trees"
    },
    {
        "question": "What is the time complexity of the extractMin() operation in a Binomial Heap?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        "correctAnswer": "O(log n)"
    },
    {
        "question": "How many binomial trees of a specific degree can exist in a Binomial Heap?",
        "options": [
            "Any number",
            "At most one",
            "Exactly two",
            "Depends on the input"
        ],
        "correctAnswer": "At most one"
    },
    {
        "question": "Which operation is used to combine two Binomial Heaps?",
        "options": [
            "Merge Sort",
            "Union",
            "Heapify",
            "Reverse List"
        ],
        "correctAnswer": "Union"
    },
    {
        "question": "What is the degree of a binomial tree that has 8 nodes?",
        "options": [
            "2",
            "3",
            "4",
            "8"
        ],
        "correctAnswer": "3"
    },
    {
        "question": "What are the components of a boundary traversal of a binary tree?",
        "options": [
            "Root, left boundary, right boundary",
            "Root, left boundary, leaf nodes, right boundary",
            "Left boundary, leaf nodes, right boundary",
            "Root, leaf nodes"
        ],
        "correctAnswer": "Root, left boundary, leaf nodes, right boundary"
    },
    {
        "question": "In which order is the right boundary printed in a boundary traversal?",
        "options": [
            "Top to bottom",
            "Bottom to top",
            "Level order",
            "Inorder"
        ],
        "correctAnswer": "Bottom to top"
    },
    {
        "question": "Which nodes are excluded from the left and right boundary during a boundary traversal?",
        "options": [
            "Root node",
            "Leaf nodes",
            "Internal nodes",
            "All nodes"
        ],
        "correctAnswer": "Leaf nodes"
    },
    {
        "question": "What is the time complexity of the boundary traversal algorithm?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(n^2)"
        ],
        "correctAnswer": "O(n)"
    },
    {
        "question": "If a left subtree is missing but a right subtree exists, which node is included in the left boundary?",
        "options": [
            "The root node",
            "The right child node",
            "The left child node",
            "No node is included"
        ],
        "correctAnswer": "The right child node"
    },
    {
        "question": "What data structure is implicitly used in the recursive implementation of Depth-First Search (DFS)?",
        "options": [
            "Queue",
            "Stack",
            "Priority Queue",
            "Linked List"
        ],
        "correctAnswer": "Stack"
    },
    {
        "question": "Which of the following describes the order in which DFS visits nodes in a graph?",
        "options": [
            "Level-by-level",
            "Depth-first",
            "Randomly",
            "Breadth-first"
        ],
        "correctAnswer": "Depth-first"
    },
    {
        "question": "What is the time complexity of the Depth-First Search (DFS) algorithm for a graph represented as an adjacency list?",
        "options": [
            "O(V log V)",
            "O(E log V)",
            "O(V + E)",
            "O(V * E)"
        ],
        "correctAnswer": "O(V + E)"
    },
    {
        "question": "If a graph contains a cycle, what might happen during a DFS traversal?",
        "options": [
            "DFS will terminate normally.",
            "DFS might enter an infinite loop (if not handled properly).",
            "DFS will throw an exception.",
            "DFS will always find the shortest path."
        ],
        "correctAnswer": "DFS might enter an infinite loop (if not handled properly)."
    },
    {
        "question": "Which of the following is a common application of Depth-First Search (DFS)?",
        "options": [
            "Finding the shortest path in an unweighted graph.",
            "Detecting cycles in a directed graph.",
            "Finding the shortest path in a weighted graph.",
            "Sorting a list of elements."
        ],
        "correctAnswer": "Detecting cycles in a directed graph."
    },
    {
        "question": "Dial’s Algorithm is most efficient for graphs with:",
        "options": [
            "Negative edge weights.",
            "Positive real-valued edge weights.",
            "Positive integer edge weights within a limited range.",
            "Unweighted edges."
        ],
        "correctAnswer": "Positive integer edge weights within a limited range."
    },
    {
        "question": "What data structure does Dial's Algorithm primarily use to organize vertices based on their distances?",
        "options": [
            "Priority Queue",
            "Stack",
            "Buckets (an array of queues)",
            "Linked List"
        ],
        "correctAnswer": "Buckets (an array of queues)"
    },
    {
        "question": "Dial's Algorithm is a variation of which other shortest-path algorithm?",
        "options": [
            "Bellman-Ford Algorithm",
            "Floyd-Warshall Algorithm",
            "Dijkstra's Algorithm",
            "Breadth-First Search (BFS)"
        ],
        "correctAnswer": "Dijkstra's Algorithm"
    },
    {
        "question": "The time complexity of Dial's Algorithm depends on:",
        "options": [
            "The number of vertices only.",
            "The number of edges only.",
            "The maximum edge weight and the number of vertices.",
            "The number of vertices and edges, but not the edge weights."
        ],
        "correctAnswer": "The maximum edge weight and the number of vertices."
    },
    {
        "question": "Dial's Algorithm is particularly useful when:",
        "options": [
            "The graph has negative cycles.",
            "The graph is very sparse.",
            "The edge weights are large and varied.",
            "The edge weights are small integers and the graph is dense."
        ],
        "correctAnswer": "The edge weights are small integers and the graph is dense."
    },
    {
        "question": "What is the time complexity of the Heap Sort algorithm?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(n^2)",
            "O(log n)"
        ],
        "correctAnswer": "O(n log n)"
    },
    {
        "question": "Which data structure is used as the basis for Heap Sort?",
        "options": [
            "Queue",
            "Stack",
            "Heap",
            "Linked List"
        ],
        "correctAnswer": "Heap"
    },
    {
        "question": "Heap Sort is an example of a(n):",
        "options": [
            "Stable sorting algorithm",
            "Unstable sorting algorithm",
            "Adaptive sorting algorithm",
            "Divide and conquer algorithm"
        ],
        "correctAnswer": "Unstable sorting algorithm"
    },
    {
        "question": "In Heap Sort, the initial array is converted into a:",
        "options": [
            "Min-heap",
            "Max-heap",
            "Binary search tree",
            "Sorted array"
        ],
        "correctAnswer": "Max-heap"
    },
    {
        "question": "What is the space complexity of Heap Sort?",
        "options": [
            "O(1) (in-place)",
            "O(n)",
            "O(log n)",
            "O(n log n)"
        ],
        "correctAnswer": "O(1) (in-place)"
    },
    {
        "question": "In a K-ary Heap, how many children does each non-leaf node have?",
        "options": [
            "2",
            "K",
            "Variable",
            "Depends on the input"
        ],
        "correctAnswer": "K"
    },
    {
        "question": "What is the time complexity of the extractMin() operation in a K-ary Heap?",
        "options": [
            "O(log n)",
            "O(k log n)",
            "O(n log k)",
            "O(n log n)"
        ],
        "correctAnswer": "O(k log n)"
    },
    {
        "question": "How is the parent of a node at index i calculated in a K-ary Heap?",
        "options": [
            "(i - 1) / 2",
            "(i - 1) / K",
            "(i + 1) / K",
            "i / K"
        ],
        "correctAnswer": "(i - 1) / K"
    },
    {
        "question": "What is the primary advantage of a K-ary Heap compared to a Binary Heap (K=2)?",
        "options": [
            "Faster insertion",
            "Faster extraction of the minimum",
            "Better cache locality for larger K",
            "Smaller memory footprint"
        ],
        "correctAnswer": "Better cache locality for larger K"
    },
    {
        "question": "If a K-ary Heap is used as a priority queue, which operation is typically the most frequently used?",
        "options": [
            "Insert",
            "ExtractMin",
            "DecreaseKey",
            "IncreaseKey"
        ],
        "correctAnswer": "ExtractMin"
    },
    {
        "question": "What is the primary goal of the \"Recover Binary Search Tree\" problem?",
        "options": [
            "To balance the BST.",
            "To delete nodes from the BST.",
            "To correct the positions of two swapped nodes in a BST.",
            "To insert new nodes into the BST."
        ],
        "correctAnswer": "To correct the positions of two swapped nodes in a BST."
    },
    {
        "question": "Which traversal method is most commonly used to identify the swapped nodes in a BST?",
        "options": [
            "Preorder traversal.",
            "Postorder traversal.",
            "Inorder traversal.",
            "Level order traversal."
        ],
        "correctAnswer": "Inorder traversal."
    },
    {
        "question": "If an inorder traversal of a BST results in the sequence [1, 5, 3, 4, 2, 6], which two nodes were swapped?",
        "options": [
            "1 and 2.",
            "3 and 2.",
            "5 and 4.",
            "5 and 2."
        ],
        "correctAnswer": "5 and 2."
    },
    {
        "question": "What is the time complexity of the most efficient solution to recover a BST?",
        "options": [
            "O(n^2).",
            "O(log n).",
            "O(n).",
            "O(n log n)."
        ],
        "correctAnswer": "O(n)."
    },
    {
        "question": "In the \"Recover BST\" problem, what indicates that two nodes are swapped in an inorder traversal?",
        "options": [
            "A node's value is greater than the previous node's value.",
            "A node's value is less than the previous node's value.",
            "Two consecutive nodes have the same value.",
            "A null node is encountered."
        ],
        "correctAnswer": "A node's value is less than the previous node's value."
    },
    {
        "question": "Topological sort is applicable to which type of graph?",
        "options": [
            "Undirected graphs",
            "Directed graphs with cycles",
            "Directed acyclic graphs (DAGs)",
            "Weighted graphs"
        ],
        "correctAnswer": "Directed acyclic graphs (DAGs)"
    },
    {
        "question": "What is the primary purpose of topological sort?",
        "options": [
            "To find the shortest path in a graph.",
            "To detect cycles in a graph.",
            "To order vertices such that for every directed edge (u, v), vertex u comes before vertex v.",
            "To find the minimum spanning tree of a graph."
        ],
        "correctAnswer": "To order vertices such that for every directed edge (u, v), vertex u comes before vertex v."
    },
    {
        "question": "Which data structure is typically used in Kahn's algorithm for topological sort?",
        "options": [
            "Stack",
            "Queue",
            "Priority Queue",
            "Linked List"
        ],
        "correctAnswer": "Queue"
    },
    {
        "question": "If a directed graph contains a cycle, what will happen when attempting to perform a topological sort?",
        "options": [
            "The algorithm will produce a valid topological order.",
            "The algorithm will terminate normally but not produce a valid topological order.",
            "The algorithm will detect the cycle and return an error or null.",
            "The algorithm will enter an infinite loop."
        ],
        "correctAnswer": "The algorithm will detect the cycle and return an error or null."
    },
    {
        "question": "What is the time complexity of Kahn's algorithm for topological sort, given a graph with V vertices and E edges?",
        "options": [
            "O(V + E)",
            "O(V log V)",
            "O(E log V)",
            "O(V * E)"
        ],
        "correctAnswer": "O(V + E)"
    },
    {
        "question": "What data structure is used to store nodes based on their horizontal distance during vertical order traversal?",
        "options": [
            "ArrayList",
            "HashMap",
            "TreeMap",
            "HashSet"
        ],
        "correctAnswer": "TreeMap"
    },
    {
        "question": "Which traversal method is used as the basis for vertical order traversal?",
        "options": [
            "Preorder traversal",
            "Inorder traversal",
            "Level order traversal (BFS)",
            "Postorder traversal"
        ],
        "correctAnswer": "Level order traversal (BFS)"
    },
    {
        "question": "What does the horizontal distance (HD) represent in the context of vertical order traversal?",
        "options": [
            "The depth of the node",
            "The level of the node",
            "The position of the node relative to the root in the horizontal direction",
            "The number of children a node has"
        ],
        "correctAnswer": "The position of the node relative to the root in the horizontal direction"
    },
    {
        "question": "What is the time complexity of the vertical order traversal algorithm?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(n^2)",
            "O(log n)"
        ],
        "correctAnswer": "O(n log n)"
    },
    {
        "question": "If two nodes have the same horizontal distance, how are they ordered in the vertical order traversal output?",
        "options": [
            "By their level (top to bottom)",
            "By their value (ascending order)",
            "By their right-to-left order",
            "By their parent node's value"
        ],
        "correctAnswer": "By their level (top to bottom)"
    },
    {
        "question": "Which traversal method is used as the basis for the left and right view algorithms?",
        "options": [
            "Preorder traversal",
            "Inorder traversal",
            "Level order traversal (BFS)",
            "Postorder traversal"
        ],
        "correctAnswer": "Level order traversal (BFS)"
    },
    {
        "question": "What is the primary data structure used in the BFS-based tree view algorithms?",
        "options": [
            "Stack",
            "Queue",
            "Priority Queue",
            "Linked List"
        ],
        "correctAnswer": "Queue"
    },
    {
        "question": "In the top view algorithm, what data structure is used to maintain the horizontal distances?",
        "options": [
            "ArrayList",
            "HashSet",
            "TreeMap",
            "HashMap"
        ],
        "correctAnswer": "TreeMap"
    },
    {
        "question": "Which node is added to the result in the left view algorithm during each level traversal?",
        "options": [
            "The last node in the level",
            "The first node in the level",
            "All nodes in the level",
            "Only the root node"
        ],
        "correctAnswer": "The first node in the level"
    },
    {
        "question": "What is the primary purpose of the Pair class used in the top view algorithm?",
        "options": [
            "To store the node's value and its level",
            "To store the node's value and its horizontal distance",
            "To store the node's left and right children",
            "To store the node's parent and its value"
        ],
        "correctAnswer": "To store the node's value and its horizontal distance"
    },
    {
        "question": "What is the primary purpose of a Winner Tree?",
        "options": [
            "Sorting an array",
            "Merging sorted lists efficiently",
            "Searching for an element in a tree",
            "Finding the shortest path in a graph"
        ],
        "correctAnswer": "Merging sorted lists efficiently"
    },
    {
        "question": "A Winner Tree is a type of:",
        "options": [
            "Binary Search Tree",
            "Heap",
            "Complete Binary Tree",
            "Graph"
        ],
        "correctAnswer": "Complete Binary Tree"
    },
    {
        "question": "In a Winner Tree, the root node stores:",
        "options": [
            "The largest element of the input.",
            "The smallest element of the input.",
            "The median of the input.",
            "The average of the input."
        ],
        "correctAnswer": "The smallest element of the input."
    },
    {
        "question": "The height of a Winner Tree is approximately:",
        "options": [
            "O(n)",
            "O(log n)",
            "O(n^2)",
            "O(1)"
        ],
        "correctAnswer": "O(log n)"
    },
    {
        "question": "When an element in the input array is updated, how is the Winner Tree updated?",
        "options": [
            "Only the root node is updated.",
            "Only the leaf node corresponding to the updated element is updated.",
            "The path from the updated leaf node to the root is updated.",
            "The entire Winner Tree is rebuilt."
        ],
        "correctAnswer": "The path from the updated leaf node to the root is updated."
    },
  
    {
        "question": "In sorting a queue, where is the smallest element placed after each pass?",
        "options": [
            "At the rear of the queue",
            "At the front of the queue",
            "In the middle of the queue",
            "It remains in its position"
        ],
        "correctAnswer": "At the front of the queue"
    },
    {
        "question": "How does sorting a circular queue differ from a regular queue?",
        "options": [
            "It does not differ.",
            "Requires modification of the pointer logic.",
            "Requires an auxiliary stack.",
            "Requires recursive sorting."
        ],
        "correctAnswer": "Requires modification of the pointer logic."
    },
    {
        "question": "What is the space complexity of sorting a queue without extra space?",
        "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
        ],
        "correctAnswer": "O(1)"
    },
    {
        "question": "Which operation is repeated multiple times to sort the queue?",
        "options": [
            "Removing and adding elements",
            "Rearranging elements directly",
            "Splitting the queue",
            "Merging sorted subqueues"
        ],
        "correctAnswer": "Removing and adding elements"
    },
    {
        "question": "What is the primary disadvantage of sorting a queue in-place?",
        "options": [
            "It is not efficient for large queues.",
            "It uses additional space.",
            "It cannot handle duplicate values.",
            "It does not preserve the original order."
        ],
        "correctAnswer": "It is not efficient for large queues."
    },
    {
        "question": "What is a stack permutation?",
        "options": [
            "Rearrangement of input elements using a stack.",
            "Sorting elements in ascending order using a stack.",
            "Reversing elements in a stack.",
            "Shuffling elements randomly."
        ],
        "correctAnswer": "Rearrangement of input elements using a stack."
    },
    {
        "question": "What happens if today's stock price is lower than the previous day's price?",
        "options": [
            "The span increases.",
            "The span is 1.",
            "The span equals the previous day's span.",
            "None of the above."
        ],
        "correctAnswer": "The span is 1."
    },
    {
        "question": "How is the stack used in calculating the stock span?",
        "options": [
            "To store days where the price was higher.",
            "To store indices of unresolved spans.",
            "To keep track of minimum prices.",
            "To calculate the average stock price."
        ],
        "correctAnswer": "To store indices of unresolved spans."
    },
    {
        "question": "Can the stock span problem be solved without using a stack?",
        "options": [
            "Yes, but with O(n^2) complexity.",
            "Yes, with O(n) complexity.",
            "No, it always requires a stack.",
            "No, it can't be solved without recursion."
        ],
        "correctAnswer": "Yes, but with O(n^2) complexity."
    },
    {
        "question": "Which of the following is NOT true about the stock span problem?",
        "options": [
            "It can be solved in linear time using a stack.",
            "It is a dynamic programming problem.",
            "It calculates consecutive days with a price higher or equal.",
            "It can be implemented iteratively."
        ],
        "correctAnswer": "It is a dynamic programming problem."
    },
    {
        "question": "What is a priority queue?",
        "options": [
            "A data structure that processes elements in a random order.",
            "A data structure where elements are processed based on their priority.",
            "A data structure where elements are always sorted.",
            "A structure that only supports insertion."
        ],
        "correctAnswer": "A data structure where elements are processed based on their priority."
    },
    {
        "question": "What is the advantage of implementing a priority queue using a DLL?",
        "options": [
            "Efficient traversal in both directions.",
            "Faster insertions.",
            "Simplified memory management.",
            "Reduces space complexity."
        ],
        "correctAnswer": "Efficient traversal in both directions."
    },
    {
        "question": "How is priority determined in a priority queue?",
        "options": [
            "By the order of insertion.",
            "By the value of the element.",
            "By the size of the element.",
            "By the position in the queue."
        ],
        "correctAnswer": "By the value of the element."
    },
    {
        "question": "Why is merge sort preferred for doubly linked lists?",
        "options": [
            "It requires less time.",
            "It works efficiently with pointer adjustments.",
            "It uses less space.",
            "It does not involve recursion."
        ],
        "correctAnswer": "It works efficiently with pointer adjustments."
    },
    {
        "question": "What is the critical advantage of merge sort over quick sort for DLLs?",
        "options": [
            "Merge sort does not require random access.",
            "Merge sort is always faster.",
            "Merge sort does not use additional space.",
            "Merge sort can work without a pivot."
        ],
        "correctAnswer": "Merge sort does not require random access."
    },
    {
        "question": "What is the primary feature of a minimum stack?",
        "options": [
            "It supports efficient retrieval of the maximum element.",
            "It supports efficient retrieval of the minimum element.",
            "It sorts elements automatically.",
            "It doubles the capacity dynamically."
        ],
        "correctAnswer": "It supports efficient retrieval of the minimum element."
    },
    {
        "question": "What additional data structure is typically used to implement a minimum stack?",
        "options": [
            "Queue",
            "HashMap",
            "Another stack",
            "Linked list"
        ],
        "correctAnswer": "Another stack"
    },
    {
        "question": "What is the time complexity of retrieving the minimum element from a minimum stack?",
        "options": [
            "O(n)",
            "O(1)",
            "O(log n)",
            "O(n^2)"
        ],
        "correctAnswer": "O(1)"
    },
    {
        "question": "When pushing an element onto the minimum stack, how is the new minimum updated?",
        "options": [
            "By recalculating the minimum from scratch.",
            "By comparing the new element with the current minimum.",
            "By sorting the stack.",
            "By using a binary search."
        ],
        "correctAnswer": "By comparing the new element with the current minimum."
    },
    {
        "question": "How does the minimum stack handle pop operations?",
        "options": [
            "The minimum value is recalculated from remaining elements.",
            "The minimum value is updated based on the popped element.",
            "The minimum value is not affected by pop operations.",
            "The minimum value is reset to the default value."
        ],
        "correctAnswer": "The minimum value is updated based on the popped element."
    },
    {
        "question": "What does the sliding window problem compute?",
        "options": [
            "Maximum value in a fixed-sized window.",
            "Minimum value in a fixed-sized window.",
            "Sum of all elements in a window.",
            "Average value in a window."
        ],
        "correctAnswer": "Maximum value in a fixed-sized window."
    },
    {
        "question": "What is the efficient data structure for solving the max sliding window problem?",
        "options": [
            "Deque",
            "Stack",
            "Queue",
            "HashMap"
        ],
        "correctAnswer": "Deque"
    },
    {
        "question": "What is the time complexity of solving the max sliding window problem using a deque?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(n^2)",
            "O(1)"
        ],
        "correctAnswer": "O(n)"
    },
    {
        "question": "What happens to elements in the deque that are no longer part of the current window?",
        "options": [
            "They are removed from the front.",
            "They are removed from the back.",
            "They are ignored.",
            "They are moved to another data structure."
        ],
        "correctAnswer": "They are removed from the front."
    },
    {
        "question": "How do we verify if a sequence is a stack permutation?",
        "options": [
            "Simulate the push and pop operations.",
            "Compare with a sorted sequence.",
            "Use recursion.",
            "Use a linked list."
        ],
        "correctAnswer": "Simulate the push and pop operations."
    },
    {
        "question": "Which algorithm is used to generate stack permutations?",
        "options": [
            "Backtracking",
            "Dynamic Programming",
            "Sorting",
            "Brute Force"
        ],
        "correctAnswer": "Backtracking"
    },

    {
        "question": "What is a node in a singly linked list?",
        "options": [
            "The first element",
            "The last element",
            "An individual element",
            "A pointer to the middle element"
        ],
        "correctAnswer": "An individual element"
    },
    {
        "question": "In a doubly linked list, each node contains how many pointers?",
        "options": [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        "correctAnswer": "Two"
    },
    {
        "question": "In which type of linked list is loop detection not applicable?",
        "options": [
            "Singly linked list",
            "Doubly linked list",
            "Circular linked list",
            "Dynamic linked list"
        ],
        "correctAnswer": "Dynamic linked list"
    },
    {
        "question": "Which of the following data structures is NOT typically used to implement a linked list?",
        "options": [
            "Array",
            "Pointer",
            "Node",
            "Reference"
        ],
        "correctAnswer": "Array"
    },
    {
        "question": "In a circular linked list, what is the difference between the last node's \"next\" pointer and the first node's 'next' pointer?",
        "options": [
            "There is no difference",
            "The last node points to the first node",
            "The first node points to the last node",
            "The last node points to null"
        ],
        "correctAnswer": "The last node points to the first node"
    },
    {
        "question": "Which of the following is a drawback of Floyd's algorithm?",
        "options": [
            "It may not always detect loops",
            "It has a high space complexity",
            "It requires sorting the linked list",
            "It cannot handle singly linked lists"
        ],
        "correctAnswer": "It may not always detect loops"
    },
    {
        "question": "What is a common method for detecting loops in a singly linked list?",
        "options": [
            "Using a counter variable",
            "Using a hash table",
            "Using two pointers (slow and fast)",
            "Traversing the list backward"
        ],
        "correctAnswer": "Using two pointers (slow and fast)"
    },
    {
        "question": "What is the time complexity of Floyd's algorithm for loop detection in a linked list?",
        "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
        ],
        "correctAnswer": "O(n)"
    },
    {
        "question": "What is the space complexity of Floyd's algorithm for loop detection in a linked list?",
        "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
        ],
        "correctAnswer": "O(1)"
    },
    {
        "question": "Which of the following statements is true when comparing hashing and Floyd's Tortoise algorithm for loop detection in linked lists or sequences?",
        "options": [
            "Hashing guarantees constant time complexity for loop detection.",
            "Floyd's Tortoise algorithm guarantees linear time complexity for loop detection.",
            "Hashing requires additional memory to store hash values.",
            "Floyd's Tortoise algorithm is not suitable for loop detection in singly linked lists."
        ],
        "correctAnswer": "Hashing requires additional memory to store hash values."
    },
    {
        "question": "Which of the following data structures is suitable for implementing a bitonic doubly linked list (DLL)?",
        "options": [
            "ArrayList",
            "LinkedList",
            "Stack",
            "PriorityQueue"
        ],
        "correctAnswer": "LinkedList"
    },
    {
        "question": "What is a bitonic sequence?",
        "options": [
            "A sequence of numbers with random order",
            "A sequence of numbers that alternates between increasing and decreasing order",
            "A sequence of numbers sorted in descending order",
            "A sequence of numbers sorted in ascending order"
        ],
        "correctAnswer": "A sequence of numbers that alternates between increasing and decreasing order"
    },
    {
        "question": "Which algorithm is commonly used to sort a bitonic sequence?",
        "options": [
            "Quick Sort",
            "Merge Sort",
            "Bitonic Sort",
            "Bubble Sort"
        ],
        "correctAnswer": "Bitonic Sort"
    },
    {
        "question": "In the context of sorting a bitonic DLL, what does \"bitonic merging\" refer to?",
        "options": [
            "Merging two sorted lists into a single sorted list",
            "Merging two bitonic sequences into a single bitonic sequence",
            "Combining two sorted arrays",
            "Rearranging elements in a bitonic sequence"
        ],
        "correctAnswer": "Merging two bitonic sequences into a single bitonic sequence"
    },
    {
        "question": "Which data structure can be used to efficiently implement bitonic merging for a bitonic DLL?",
        "options": [
            "ArrayList",
            "Stack",
            "PriorityQueue",
            "Deque"
        ],
        "correctAnswer": "Deque"
    },
    {
        "question": "Which of the following is NOT a step involved in sorting a bitonic DLL?",
        "options": [
            "Identifying the bitonic point",
            "Splitting the list into two sublists",
            "Merging the two sublists",
            "Reversing the sublist before the bitonic point"
        ],
        "correctAnswer": "Reversing the sublist before the bitonic point"
    },
    {
        "question": "How many sorting passes are required to completely sort a bitonic DLL?",
        "options": [
            "One",
            "Two",
            "Three",
            "It depends on the size of the list"
        ],
        "correctAnswer": "Two"
    },
    {
        "question": "Which sorting algorithm is commonly used to sort the two sublists in a bitonic DLL?",
        "options": [
            "Bubble Sort",
            "Quick Sort",
            "Merge Sort",
            "Insertion Sort"
        ],
        "correctAnswer": "Merge Sort"
    },
    {
        "question": "What is the primary goal of the Tower of Hanoi problem?",
        "options": [
            "To move all disks from one rod to another rod.",
            "To sort the disks in ascending order.",
            "To find the largest disk.",
            "To find the total number of moves required."
        ],
        "correctAnswer": "To move all disks from one rod to another rod."
    },
    {
        "question": "How many rods are used in the classic Tower of Hanoi problem?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "correctAnswer": "3"
    },
    {
        "question": "In the iterative solution to the Tower of Hanoi, how is the problem divided into subproblems?",
        "options": [
            "Divide the disks into two equal parts.",
            "Divide the disks into three equal parts.",
            "Divide the disks into smaller and smaller subproblems.",
            "Divide the disks into four equal parts."
        ],
        "correctAnswer": "Divide the disks into two equal parts."
    },
    {
        "question": "What is the minimum number of moves required to solve the Tower of Hanoi problem with 4 disks?",
        "options": [
            "4",
            "7",
            "15",
            "31"
        ],
        "correctAnswer": "7"
    },
    {
        "question": "Which data structure is commonly used to implement the iterative solution to the Tower of Hanoi problem?",
        "options": [
            "Stack",
            "Queue",
            "Array",
            "LinkedList"
        ],
        "correctAnswer": "Stack"
    },
    {
        "question": "In the iterative Tower of Hanoi solution, how are the disks moved between the rods?",
        "options": [
            "Using recursion",
            "Using a loop",
            "Using dynamic programming",
            "Using a binary tree"
        ],
        "correctAnswer": "Using a loop"
    },
    {
        "question": "What is the time complexity of the iterative solution to the Tower of Hanoi problem with n disks?",
        "options": [
            "O(n)",
            "O(2^n)",
            "O(log n)",
            "O(n^2)"
        ],
        "correctAnswer": "O(2^n)"
    },
    {
        "question": "In the iterative Tower of Hanoi solution, what is the purpose of using a stack data structure?",
        "options": [
            "To store the rods.",
            "To keep track of the number of disks.",
            "To maintain the order of disk movements.",
            "To simulate the recursive calls in an iterative manner."
        ],
        "correctAnswer": "To simulate the recursive calls in an iterative manner."
    },
    {
        "question": "How does the iterative Tower of Hanoi solution ensure that the correct disk movement order is maintained?",
        "options": [
            "By using a queue data structure.",
            "By using a depth-first search algorithm.",
            "By using a loop and a stack data structure.",
            "By using a breadth-first search algorithm."
        ],
        "correctAnswer": "By using a loop and a stack data structure."
    },
    {
        "question": "What is the space complexity of the iterative Tower of Hanoi solution?",
        "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
        ],
        "correctAnswer": "O(n)"
    },
    {
        "question": "What is the Celebrity Problem?",
        "options": [
            "A problem related to identifying famous people in a social network.",
            "A problem related to finding a person who is widely recognized.",
            "A problem of identifying a person who is known by everyone but knows no one.",
            "A problem of identifying a popular movie star."
        ],
        "correctAnswer": "A problem of identifying a person who is known by everyone but knows no one."
    },
    {
        "question": "In the Celebrity Problem, what does it mean for someone to be a \"celebrity\"?",
        "options": [
            "They have a large social media following.",
            "They are famous in their field.",
            "They are known by everyone but know no one.",
            "They are a popular public figure."
        ],
        "correctAnswer": "They are known by everyone but know no one."
    },
    {
        "question": "Which data structure is commonly used to solve the Celebrity Problem efficiently?",
        "options": [
            "Stack",
            "Queue",
            "Graph",
            "Array"
        ],
        "correctAnswer": "Stack"
    },
    {
        "question": "In the Celebrity Problem, how many people need to vouch for someone to be considered a celebrity?",
        "options": [
            "At least one person.",
            "At least two people.",
            "At least half of the total people.",
            "Everyone in the group."
        ],
        "correctAnswer": "Everyone in the group."
    },
    {
        "question": "In the Celebrity Problem, what is the primary goal of the algorithm?",
        "options": [
            "To identify the most famous person.",
            "To minimize the number of comparisons.",
            "To find a person with the largest social network following.",
            "To find a person known by everyone."
        ],
        "correctAnswer": "To find a person known by everyone."
    },
    {
        "question": "How is the Celebrity Problem typically represented?",
        "options": [
            "Using a circular linked list.",
            "With a binary search tree.",
            "Using a square matrix.",
            "Through a hash table."
        ],
        "correctAnswer": "Using a square matrix."
    },
    {
        "question": "Which factor primarily influences the time complexity of the Celebrity Problem algorithm?",
        "options": [
            "The number of iterations.",
            "The number of comparisons.",
            "The number of recursive calls.",
            "The number of celebrities."
        ],
        "correctAnswer": "The number of comparisons."
    },
    {
        "question": "How does the time complexity of the optimized Celebrity Problem algorithm scale with an increase in the number of people in the group?",
        "options": [
            "It remains constant.",
            "It decreases.",
            "It increases linearly.",
            "It increases exponentially."
        ],
        "correctAnswer": "It increases linearly."
    },
    {
        "question": "What is the time complexity of the optimized algorithm for solving the Celebrity Problem?",
        "options": [
            "O(1)",
            "O(log N)",
            "O(N)",
            "O(N^2)"
        ],
        "correctAnswer": "O(N)"
    },
    {
        "question": "What is the space complexity of the optimized algorithm for solving the Celebrity Problem?",
        "options": [
            "O(1)",
            "O(N)",
            "O(log N)",
            "O(N^2)"
        ],
        "correctAnswer": "O(1)"
    },
    {
        "question": "What is a Priority Queue?",
        "options": [
            "A queue with fixed-size capacity",
            "A queue with variable-size capacity",
            "A queue that follows Last in First Out (LIFO) order",
            "A queue where each element has an associated priority"
        ],
        "correctAnswer": "A queue where each element has an associated priority"
    },
    {
        "question": "Which data structure is suitable for implementing a Priority Queue using a DLL?",
        "options": [
            "Stack",
            "Queue",
            "Linked List",
            "Binary Heap"
        ],
        "correctAnswer": "Linked List"
    },
    {
        "question": "In a Priority Queue implemented with a DLL, which operation takes O(1) time complexity?",
        "options": [
            "Insertion",
            "Deletion",
            "Searching",
            "Traversal"
        ],
        "correctAnswer": "Insertion"
    },
    {
        "question": "What is the key feature of a Priority Queue that differentiates it from a regular queue?",
        "options": [
            "FIFO (First-In-First-Out) behavior",
            "LIFO (Last-In-First-Out) behavior",
            "Elements are ordered by priority",
            "No ordering of elements"
        ],
        "correctAnswer": "Elements are ordered by priority"
    },
    {
        "question": "How are elements stored in a Priority Queue based on a DLL?",
        "options": [
            "In a random order",
            "In ascending order",
            "In descending order",
            "In order of insertion"
        ],
        "correctAnswer": "In ascending order"
    },
    {
        "question": "Which operation is used to remove and return the highest-priority element from a Priority Queue implemented with a DLL?",
        "options": [
            "pop()",
            "peek()",
            "poll()",
            "push()"
        ],
        "correctAnswer": "poll()"
    },
    {
        "question": "How is the highest-priority element determined in a Priority Queue based on a DLL?",
        "options": [
            "By its position in the DLL",
            "By the value of its key",
            "By its index in the DLL",
            "By its order of insertion"
        ],
        "correctAnswer": "By the value of its key"
    },
    {
        "question": "What is the time complexity of inserting an element into a Priority Queue implemented with a DLL, assuming the DLL is already sorted by priority?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        "correctAnswer": "O(n)"
    },
    {
        "question": "What is the space complexity of a Priority Queue implemented with a DLL?",
        "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n log n)"
        ],
        "correctAnswer": "O(n)"
    },
    {
        "question": "Which operation is used to add an element to a Priority Queue implemented with a DLL?",
        "options": [
            "add()",
            "push()",
            "insert()",
            "enqueue()"
        ],
        "correctAnswer": "push()"
    },
    {
        "question": "Which sorting algorithm divides the array into a sorted and an unsorted region and repeatedly selects the minimum element from the unsorted region and moves it to the sorted region?",
        "options": [
            "Insertion Sort",
            "Quick Sort",
            "Selection Sort",
            "Heap Sort"
        ],
        "correctAnswer": "Selection Sort"
    },
    {
        "question": "Which sorting algorithm uses a pivot element and partitions the array into two subarrays such that elements less than the pivot are on the left and elements greater than the pivot are on the right?",
        "options": [
            "Merge Sort",
            "Insertion Sort",
            "Quick Sort",
            "Radix Sort"
        ],
        "correctAnswer": "Quick Sort"
    },
    {
        "question": "Which sorting algorithm works by repeatedly dividing the input array into two subarrays, sorting them, and then merging them?",
        "options": [
            "Quick Sort",
            "Insertion Sort",
            "Merge Sort",
            "Selection Sort"
        ],
        "correctAnswer": "Merge Sort"
    },
];

// Function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle questions and options
shuffleArray(questions);
questions.forEach(q => shuffleArray(q.options));
