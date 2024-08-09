/**
 * Medium
 * https://leetcode.com/problems/house-robber-iii/
 */
function rob(root: TreeNode | null): number {
	/**
	 * For each node, we have two options:
	 * 1. Skip the current node and rob its children.
	 * 2. Rob the current node and skip its children.
	 * We use a helper function to keep track of the maximum profit
	 * we can get from a node when we rob it or skip it.
	 * The helper function returns an array of two elements:
	 * 1. Index 0 has the maximum profit we can get
	 * from the current node when we skip it.
	 * Which is the maximum of the two values:
	 * - The maximum profit we can get from the left subtree when we rob it or skip it.
	 * - The maximum profit we can get from the right subtree when we rob it or skip it.
	 * 2. Index 1 has the maximum profit we can get from the current node when we rob it.
	 * Which is the sum of the current node value and the maximum profit we can get from the left
	 * subtree when we skip it and the maximum profit we can get from the right subtree when we skip it.
	 * We then return the maximum of the two values.
	 */
	function maxProfit(current: TreeNode | null): number[] {
		if (current === null) return [0, 0];
		const leftSubtree = maxProfit(current.left);
		const rightSubtree = maxProfit(current.right);
		const skipOrRob = [0, 0];
		skipOrRob[0] =
			Math.max(leftSubtree[0], leftSubtree[1]) +
			Math.max(rightSubtree[0], rightSubtree[1]);
		skipOrRob[1] = current.val + leftSubtree[0] + rightSubtree[0];
		return skipOrRob;
	}
	const [skipRoot, robRoot] = maxProfit(root);
	return Math.max(skipRoot, robRoot);
}
