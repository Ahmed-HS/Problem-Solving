/**
 * Medium
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 */
function connect(root: Node | null): Node | null {
	if (!root) return null;
	const left = root.left;
	const right = root.right;
	const next = root.next;
	// If left exists, right will also exist.
	if (left) {
		left.next = right;
		// If next exists, connect right to next's left.
		// next will not exist for the rightmost node in the level.
		if (next) right.next = next.left;
		connect(left);
		connect(right);
	}
	return root;
}
