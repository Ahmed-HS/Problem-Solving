/**
 * Easy
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 */
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
	while (root && root.val !== val) {
		root = val > root.val ? root.right : root.left;
	}
	return root;
}
