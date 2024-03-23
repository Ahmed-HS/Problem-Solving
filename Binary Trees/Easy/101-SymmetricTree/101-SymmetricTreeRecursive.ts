/**
 * Easy
 * https://leetcode.com/problems/symmetric-tree/
 */
function isSymmetric(root: TreeNode | null): boolean {
	if (root === null) {
		return true;
	}
	return isMirror(root.left, root.right);
}

/**
 * Helper function to check if two trees are mirrors of each other,
 * it first checks if the values of the roots are equal, then it recursively
 * checks if the left of the first tree is the mirror of the right of the second tree
 * and if the right of the first tree is the mirror of the left of the second tree.
 */
function isMirror(root1: TreeNode | null, root2: TreeNode | null): boolean {
	if (root1 === null && root2 === null) {
		return true;
	}
	if (root1 === null || root2 === null) {
		return false;
	}
	return (
		root1.val === root2.val &&
		isMirror(root1.left, root2.right) &&
		isMirror(root1.right, root2.left)
	);
}
