/**
 * Medium
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 */
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
	if (inorder.length === 0) return null;
	let inorderPointer = inorder.length - 1;
	let postorderPointer = postorder.length - 1;
	const stack = [];
	let previous = null;
	const root = new TreeNode(postorder[postorderPointer]);
	stack.push(root);
	postorderPointer--;
	/**
	 * The idea is to traverse the postorder array in reverse order
	 * as the root of the tree is the last element in the postorder array.
	 * The reverse of the postorder array is like a preorder array where
	 * the nodes are visited in the order root -> right -> left.
	 * The next element in the reverse postorder array is the right child of
	 * the top node in the stack unless the top node value is equal to the
	 * inorder array value at inorderPointer.
	 * The reverse of the inorder array is like an inorder array where the
	 * nodes are visited in the order right -> root -> left.
	 * So if the top node value is equal to the inorder array value at inorderPointer,
	 * it means that the top node has no right child and the next element in the
	 * reverse postorder array is the left child of the top node.
	 */
	while (postorderPointer >= 0) {
		/**
		 * If the top node value is equal to the inorder array value at inorderPointer,
		 * it means we have already visited the right subtree of the top node.
		 * So we pop the top node from the stack and decrement inorderPointer.
		 */
		while (
			stack.length &&
			stack[stack.length - 1].val === inorder[inorderPointer]
		) {
			previous = stack.pop();
			inorderPointer--;
		}
		const newNode = new TreeNode(postorder[postorderPointer]);
		/**
		 * If the previous node exists, it means the new node is the left child
		 * of the previous node as we have already visited the right subtree of the
		 * previous node. Otherwise, the new node is the right child of the top node.
		 */
		if (previous !== null) {
			previous.left = newNode;
		} else if (stack.length) {
			const top = stack[stack.length - 1];
			top.right = newNode;
		}
		stack.push(newNode);
		// Set previous node to null to continue moving in the right subtree.
		previous = null;
		postorderPointer--;
	}
	return root;
}
