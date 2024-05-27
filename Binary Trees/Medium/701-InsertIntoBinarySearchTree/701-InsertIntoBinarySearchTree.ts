/**
 * Medium
 * https://leetcode.com/problems/insert-into-a-binary-search-tree/
 */
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
	let parent = null;
	let current = root;
	while (current) {
		parent = current;
		current = val > current.val ? current.right : current.left;
	}
	const newNode = new TreeNode(val);
	if (!parent) return newNode;
	if (val > parent.val) {
		parent.right = newNode;
	} else {
		parent.left = newNode;
	}
	return root;
}
