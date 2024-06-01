/**
 * Easy
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 */
function preorder(root: Node | null): number[] {
	if (!root) return [];
	const traversal = [root.val];
	for (const child of root.children) {
		traversal.push(...preorder(child));
	}
	return traversal;
}
