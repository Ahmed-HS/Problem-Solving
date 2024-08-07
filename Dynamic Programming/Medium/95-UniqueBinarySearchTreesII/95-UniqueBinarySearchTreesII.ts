/**
 * Medium
 * https://leetcode.com/problems/unique-binary-search-trees-ii/
 */
function generateTrees(n: number): Array<TreeNode | null> {
	/**
	 * The idea is to loop through all the numbers from 1 to n and for each number,
	 * we create a tree with that number as the root and then we recursively create
	 * all the possible left and right subtrees combinations.
	 * In a binary search tree, the left subtree will have all the numbers less than
	 * the root and the right subtree will have all the numbers greater than the root.
	 * So, for each number, we have two subproblems: building the left subtree from
	 * the numbers in the range [start, i - 1] and building the right subtree from
	 * the numbers in the range [i + 1, end].
	 * We then combine all the possible left and right subtrees pairs with the root to get
	 * all the possible trees.
	 */
	const result: Array<Array<Array<TreeNode | null>>> = new Array(n + 1)
		.fill(0)
		.map(() => new Array(n + 1).fill(0).map(() => []));
	//When start === end, there is only one possible tree with the root as the number.
	for (let i = 1; i <= n; i++) {
		result[i][i].push(new TreeNode(i));
	}
	/**
	 * We loop through all the lengths of the subtrees from 2 to n.
	 * For each length, we loop through all the possible starting positions of the subtrees.
	 * For each starting position, we loop through all the possible roots of the subtrees.
	 * We then combine all the possible left and right subtrees pairs with the root to get
	 * all the possible trees.
	 */
	for (let length = 2; length <= n; length++) {
		//We stop at n - length + 1 because we need to have enough numbers to form the subtree.
		for (let start = 1; start <= n - length + 1; start++) {
			const end = start + length - 1;
			for (let root = start; root <= end; root++) {
				//If i === start, there is no left subtree.
				const leftSubtrees =
					root === start ? [null] : result[start][root - 1];
				//If i === end, there is no right subtree.
				const rightSubtrees =
					root === end ? [null] : result[root + 1][end];
				for (const left of leftSubtrees) {
					for (const right of rightSubtrees) {
						const tree = new TreeNode(root, left, right);
						result[start][end].push(tree);
					}
				}
			}
		}
	}
	return result[1][n];
}
