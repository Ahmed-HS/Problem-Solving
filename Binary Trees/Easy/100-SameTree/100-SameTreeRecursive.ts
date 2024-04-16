/**
 * Easy
 * https://leetcode.com/problems/same-tree/
 */
function isSameTree(root1: TreeNode | null, root2: TreeNode | null): boolean {
	if (!root1 || !root2) {
		return root1 === root2;
	}
	if (root1.val !== root2.val) return false;
	return (
		isSameTree(root1.left, root2.left) &&
		isSameTree(root1.right, root2.right)
	);
}
