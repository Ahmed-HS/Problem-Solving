/**
 * Easy
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 */
function postorder(root: _Node | null): number[] {
	const traversal = [];
	const toVisit = root ? [root] : [];
	while (toVisit.length) {
		const current = toVisit.pop();
		traversal.push(current.val);
		for (const child of current.children) {
			toVisit.push(child);
		}
	}
	return traversal.reverse();
}
