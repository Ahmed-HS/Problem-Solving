/**
 * Medium
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 */
function connect(root: Node | null): Node | null {
	const toVisit = [root].filter((node) => node !== null);
	while (toVisit.length) {
		const size = toVisit.length;
		for (let i = 0; i < size; i++) {
			const node = toVisit.shift();
			node.next = i === size - 1 ? null : toVisit[0];
			const children = [node.left, node.right].filter(
				(node) => node !== null
			);
			toVisit.push(...children);
		}
	}
	return root;
}
