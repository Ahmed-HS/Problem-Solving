/**
 * Medium
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 */
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
	const indexMapping = new Map<number, number>();
	for (const [index, value] of inorder.entries()) {
		indexMapping.set(value, index);
	}
	/**
	 * The last element in the postorder array is the root of the tree,
	 * and the elements before the root in the postorder array are the right
	 * subtrees of the root, followed by the left subtrees.
	 * As we move backwards in the postorder array, we are going down the tree
	 * to the right, then back to the left.
	 * At each step, we pop the last element from the postorder array and create
	 * a node with that value.
	 * We then find the index of the node value in the inorder array.
	 * The elements to the right of the index in the inorder array are the right
	 * subtrees of the node, and the elements to the left are the left subtrees.
	 * Not all elements to the right, or to the left, of the index in the inorder
	 * array are the right or left subtrees of the node. So, we use a start and end
	 * pointer to keep track of the elements that are in the subtree of the current node.
	 * When the start equals the end, it means there is only one element in the subtree
	 * (a leaf node), and when the start is greater than the end, it means there are no
	 * elements in the subtree (null node).
	 * We recursively create the right subtree first, then the left subtree.
	 * The reason we create the right subtree first is that the right subtree is
	 * visited before the left subtree in the reverse of the postorder array.
	 */
	function createTree(start: number, end: number) {
		if (start > end) return null;
		const rootvalue = postorder.pop();
		const rootIndex = indexMapping.get(rootvalue);
		const root = new TreeNode(rootvalue);
		root.right = createTree(rootIndex + 1, end);
		root.left = createTree(start, rootIndex - 1);
		return root;
	}
	return createTree(0, inorder.length - 1);
}
