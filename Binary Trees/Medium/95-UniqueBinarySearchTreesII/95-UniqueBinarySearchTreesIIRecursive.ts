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
	 * We memoize the results to avoid recomputing the same subtrees.
	 * The base case is when start > end, in which case we return [null] as there is no tree.
	 */
	const seen = new Map<string, Array<TreeNode | null>>();
	function buildTrees(start: number, end: number): Array<TreeNode | null> {
		if (start > end) {
			return [null];
		}
		const answerKey = `${start}:${end}`;
		const savedAnswer = seen.get(answerKey);
		if (savedAnswer) return savedAnswer;
		const answer = [];
		for (let i = start; i <= end; i++) {
			const leftSubtrees = buildTrees(start, i - 1);
			const rightSubtrees = buildTrees(i + 1, end);
			for (const left of leftSubtrees) {
				for (const right of rightSubtrees) {
					const root = new TreeNode(i, left, right);
					answer.push(root);
				}
			}
		}
		seen.set(answerKey, answer);
		return answer;
	}
	return buildTrees(1, n);
}
