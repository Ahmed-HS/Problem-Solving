/**
 * Easy
 * https://leetcode.com/problems/balanced-binary-tree/
 */
function isBalanced(root: TreeNode | null): boolean {
	return getTreeDepth(root) !== -1;
}

function getTreeDepth(root: TreeNode | null): number {
	if (!root) return 0;
	const leftDepth = getTreeDepth(root.left);
	const rightDepth = getTreeDepth(root.right);
	if (
		leftDepth === -1 ||
		rightDepth === -1 ||
		Math.abs(leftDepth - rightDepth) > 1
	) {
		return -1;
	}
	return 1 + Math.max(leftDepth, rightDepth);
}
