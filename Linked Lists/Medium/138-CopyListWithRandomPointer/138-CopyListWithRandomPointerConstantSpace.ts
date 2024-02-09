/**
 * Medium
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 */
function copyRandomList(head: Node | null): Node | null {
	/**
	 * First, we create a copy of each node
	 * and insert it next to the original node.
	 */
	let current = head;
	while (current) {
		const next = current.next;
		const copy = new Node(current.val, next);

		current.next = copy;

		current = next;
	}

	/**
	 * Then, we set the random pointers of the copied nodes.
	 * The random pointer of a copied node will be the next node
	 * of the original node's random pointer.
	 */
	current = head;
	while (current?.next) {
		const copy = current.next;
		const copyRandom = current.random?.next ?? null;
		copy.random = copyRandom;
		current = copy.next;
	}

	/**
	 * Finally, we separate the original list from the copied list.
	 * By skipping the copied nodes in the original list.
	 */
	current = head;
	const copiedList = current?.next ?? null;
	let copy = copiedList;
	while (copy) {
		current.next = current.next?.next ?? null;
		copy.next = copy.next?.next ?? null;
		current = current.next;
		copy = copy.next;
	}

	return copiedList;
}
