/**
 * Medium
 * https://leetcode.com/problems/house-robber-iii/
 */
function rob(root: TreeNode | null): number {
	const seen = new Map<TreeNode, number>();
	function maxProfit(current: TreeNode | null) {
		if (!current) return 0;
		const savedProfit = seen.get(current);
		if (savedProfit !== undefined) return savedProfit;
		const skipCurrent = maxProfit(current.left) + maxProfit(current.right);
		const robCurrent =
			current.val +
			maxProfit(current.left?.left) +
			maxProfit(current.left?.right) +
			maxProfit(current.right?.left) +
			maxProfit(current.right?.right);
		const profit = Math.max(skipCurrent, robCurrent);
		seen.set(current, profit);
		return profit;
	}
	return maxProfit(root);
}
