/**
 * Easy
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 */
function postorder(root: _Node | null): number[] {
	const traversal = [];
	const toVisit = root ? [[root, false]] : [];
	while (toVisit.length) {
		const node = toVisit.pop();
		const current = node[0] as _Node;
		const visited = node[1];
		if (visited) {
			traversal.push(current.val);
			continue;
		}
		toVisit.push([current, true]);
		for (let i = current.children.length - 1; i >= 0; i--) {
			toVisit.push([current.children[i], false]);
		}
	}
	return traversal;
}
