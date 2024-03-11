/**
 * Medium
 * https://leetcode.com/problems/clone-graph/
 */
function cloneGraph(node: Node | null): Node | null {
	if (node === null) return null;
	// Mappping of the original node to the copy of the node.
	const graphCopy = new Map<Node, Node>();
	// Define a helper function to clone a node and its neighbors.
	function clone(target: Node): Node {
		// Create a copy of the target node.
		const copyNode = new Node(target.val);
		// Add the copy of the target node to the map.
		graphCopy.set(target, copyNode);
		// For each neighbor of the target node.
		for (const neighbor of target.neighbors) {
			// If the neighbor has not been copied yet.
			if (!graphCopy.has(neighbor)) {
				// Clone the neighbor.
				clone(neighbor);
			}
			// Get the copy of the neighbor.
			const neighborCopy = graphCopy.get(neighbor);
			// Add the copy of the neighbor to the neighbors of the copy of the target node.
			copyNode.neighbors.push(neighborCopy);
		}
		// Return the copy of the target node.
		return copyNode;
	}
	// Clone the input node and return the copy.
	return clone(node);
}
