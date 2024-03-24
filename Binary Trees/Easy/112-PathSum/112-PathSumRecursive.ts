/**
 * Easy
 * https://leetcode.com/problems/path-sum/
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (!root) return false;
	if (!root.left && !root.right) {
		return targetSum === root.val;
	}
	const remaining = targetSum - root.val;
	return (
		hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining)
	);
}
