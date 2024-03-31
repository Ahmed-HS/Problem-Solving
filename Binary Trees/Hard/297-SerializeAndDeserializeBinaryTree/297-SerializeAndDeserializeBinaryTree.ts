/**
 * Hard
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 */
function serialize(root: TreeNode | null): string {
	/**
	 * Save the level order traversal of the tree
	 * in the levels array, using "#" for null nodes.
	 */
	const levels = [];
	const toVisit = [root].filter((node) => node !== null);
	while (toVisit.length) {
		const size = toVisit.length;
		for (let i = 0; i < size; i++) {
			const node = toVisit.shift();
			levels.push(node?.val ?? "#");
			if (!node) continue;
			const children = [node.left, node.right];
			toVisit.push(...children);
		}
	}
	return levels.join(",");
}

function deserialize(data: string): TreeNode | null {
	if (!data.length) return null;
	/**
	 * Map the values in the data string to TreeNode instances,
	 * and connect the nodes to build the tree.
	 */
	const values = data
		.split(",")
		.map((value) => (value === "#" ? null : new TreeNode(+value)));
	// Pointer to the current node's children in the values array.
	let child = 1;
	for (let i = 0; i < values.length; i++) {
		// Skip null nodes.
		if (!values[i]) continue;
		values[i].left = values[child];
		child++;
		values[i].right = values[child];
		child++;
	}
	return values[0];
}
