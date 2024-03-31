/**
 * Hard
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 */
function serialize(root: TreeNode | null): string {
	const values = [];
	/**
	 * Save the preorder traversal of the tree
	 * in the values array, using "#" for null nodes.
	 */
	function build(root: TreeNode | null) {
		if (!root) {
			values.push("#");
			return;
		}
		values.push(root.val);
		build(root.left);
		build(root.right);
	}
	build(root);
	return values.join(",");
}

function deserialize(data: string): TreeNode | null {
	const values = data.split(",");
	// Pointer to the current node in the values array.
	let current = 0;
	/**
	 * Build the tree using the preorder traversal
	 * stored in the values array, and when we find a "#"
	 * we return null to indicate a null node.
	 */
	function build(): TreeNode | null {
		if (values[current] === "#") return null;
		const node = new TreeNode(+values[current]);
		current++;
		node.left = build();
		current++;
		node.right = build();
		return node;
	}
	return build();
}
