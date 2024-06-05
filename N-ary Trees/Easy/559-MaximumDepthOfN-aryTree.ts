/**
 * Easy
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 */
function maxDepth(root: Node | null): number {
	if (!root) return null;
	let depth = 0;
	for (const child of root.children) {
		depth = Math.max(depth, maxDepth(child));
	}
	return depth + 1;
}
