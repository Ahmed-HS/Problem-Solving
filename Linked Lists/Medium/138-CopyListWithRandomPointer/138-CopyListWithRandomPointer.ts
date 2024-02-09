/**
 * Medium
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 */
function copyRandomList(head: Node | null): Node | null {
	/**
	 * We use a map to store the mappings
	 * of the original nodes to the copied nodes.
	 */
	const copyMappings = new Map();

	let copy = head;

	while (copy) {
		const copyNode = new Node(copy.val);
		copyMappings.set(copy, copyNode);
		copy = copy.next;
	}

	copy = head;

	/**
	 * We use the saved mappings to find the copied nodes
	 * corresponding to the original nodes.
	 */
	while (copy) {
		const copyNode = copyMappings.get(copy);
		copyNode.next = copyMappings.get(copy.next) ?? null;
		copyNode.random = copyMappings.get(copy.random) ?? null;
		copy = copy.next;
	}

	return copyMappings.get(head) ?? null;
}
