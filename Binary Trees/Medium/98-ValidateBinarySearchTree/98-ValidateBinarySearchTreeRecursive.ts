/**
 * Medium
 * https://leetcode.com/problems/validate-binary-search-tree/
 */
function isValidBST(root: TreeNode | null): boolean {
	/**
	 * The inorder traversal of a binary search tree is a sorted array.
	 * We can perform an inorder traversal of the tree and keep track of the last
	 * value we visited. If the current value is less than or equal to the last value,
	 * then the tree is not a binary search tree.
	 */
	let lastValue = -Infinity;
	function validate(root: TreeNode | null): boolean {
		if (!root) return true;
		if (!validate(root.left)) return false;
		if (root.val <= lastValue) return false;
		lastValue = root.val;
		return validate(root.right);
	}
	return validate(root);
}
