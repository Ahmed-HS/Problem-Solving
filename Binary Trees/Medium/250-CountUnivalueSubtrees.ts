/**
 * Medium
 * https://leetcode.com/problems/count-univalue-subtrees/
 */
function countUnivalSubtrees(root: TreeNode | null): number {
	let count = 0;
	function isUnivalSubtree(node: TreeNode | null): boolean {
		// A null node is considered a unival subtree.
		if (!node) {
			return true;
		}
		// Recursively check the left and right subtrees.
		const isLeftUnival = isUnivalSubtree(node.left);
		const isRightUnival = isUnivalSubtree(node.right);
		// If either subtree is not unival, then this cannot be a unival subtree.
		if (!isLeftUnival || !isRightUnival) {
			return false;
		}
		// If the left child exists and its value is not equal to current node's value, this is not a unival subtree.
		if (node.left && node.left.val !== node.val) {
			return false;
		}
		// If the right child exists and its value is not equal to current node's value, this is not a unival subtree.
		if (node.right && node.right.val !== node.val) {
			return false;
		}
		count++;
		return true;
	}
	isUnivalSubtree(root);
	return count;
}
