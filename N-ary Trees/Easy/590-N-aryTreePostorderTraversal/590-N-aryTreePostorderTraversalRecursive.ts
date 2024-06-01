/**
 * Easy
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 */
function postorder(root: _Node | null): number[] {
	if (!root) return [];
	const traversal = [];
	for (const child of root.children) {
		traversal.push(...postorder(child));
	}
	traversal.push(root.val);
	return traversal;
}
