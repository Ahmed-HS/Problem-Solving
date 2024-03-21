/**
 * Medium
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */
function levelOrder(root: TreeNode | null): number[][] {
	const levels = [];
	const toVisit = [root].filter((node) => node !== null);
	while (toVisit.length) {
		const size = toVisit.length;
		const currentLevel = [];
		for (let i = 0; i < size; i++) {
			const node = toVisit.shift();
			currentLevel.push(node.val);
			const children = [node.left, node.right].filter(
				(node) => node !== null
			);
			toVisit.push(...children);
		}
		levels.push(currentLevel);
	}
	return levels;
}
