/**
 * Medium
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	const indexMapping = new Map<number, number>();
	for (const [index, value] of inorder.entries()) {
		indexMapping.set(value, index);
	}
	let currentSubtree = 0;
	/**
	 * The first element in the preorder array is the root of the tree,
	 * and the elements after the root in the preorder array are the left
	 * subtrees of the root, followed by the right subtrees.
	 * As we move forwards in the preorder array, we are going down the tree
	 * to the left, then back to the right.
	 * At each step, we pop the first element from the preorder array and create
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
	 * We recursively create the left subtree first, then the right subtree.
	 * The reason we create the left subtree first is that the left subtree is
	 * visited before the right subtree in the preorder array.
	 */
	function createTree(start: number, end: number) {
		if (start > end) return null;
		const rootvalue = preorder[currentSubtree];
		currentSubtree++;
		const rootIndex = indexMapping.get(rootvalue);
		const root = new TreeNode(rootvalue);
		root.left = createTree(start, rootIndex - 1);
		root.right = createTree(rootIndex + 1, end);
		return root;
	}
	return createTree(0, inorder.length - 1);
}
