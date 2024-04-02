/**
 * Easy
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 */
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
	if (!root) return null;
	if (root.val === val) return root;
	return val > root.val
		? searchBST(root.right, val)
		: searchBST(root.left, val);
}
