/**
 * Easy
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 */
function preorder(root: Node | null): number[] {
	const traversal = [];
	const toVisit = [root].filter((node) => node !== null);
	while (toVisit.length) {
		const current = toVisit.pop();
		traversal.push(current.val);
		for (let i = current.children.length - 1; i >= 0; i--) {
			toVisit.push(current.children[i]);
		}
	}
	return traversal;
}
