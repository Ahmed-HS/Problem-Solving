/**
 * Easy
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */
function maxDepth(root: TreeNode | null): number {
	const toVisit = [root].filter((node) => node !== null);
	let levels = 0;
	while (toVisit.length) {
		const size = toVisit.length;
		for (let i = 0; i < size; i++) {
			const node = toVisit.shift();
			const children = [node.left, node.right].filter(
				(node) => node !== null
			);
			toVisit.push(...children);
		}
		levels++;
	}
	return levels;
}
