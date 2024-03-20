/**
 * Easy
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 */
function preorderTraversal(root: TreeNode | null): number[] {
	const rights = [];
	const values = [];
	let current = root;
	while (current) {
		values.push(current.val);
		if (current.right) {
			rights.push(current.right);
		}
		current = current.left ? current.left : rights.pop();
	}
	return values;
}
