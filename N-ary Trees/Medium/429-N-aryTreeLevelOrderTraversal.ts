/**
 * Medium
 * https://leetcode.com/problems/n-ary-tree-level-order-traversal/
 */
function levelOrder(root: _Node | null): number[][] {
	const levels = [];
	let toVisit = root ? [root] : [];
	while (toVisit.length) {
		const currentLevel = toVisit.map((node) => node.val);
		levels.push(currentLevel);
		const nextLevel = toVisit.map((node) => node.children);
		toVisit = [].concat(...nextLevel);
	}
	return levels;
}
