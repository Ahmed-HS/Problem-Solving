/**
 * Medium
 * https://leetcode.com/problems/clone-graph/
 */
function cloneGraph(node: Node | null): Node | null {
	if (node === null) return null;
	const toVisit = [node];
	// Mappping of the original node to the copy of the node.
	const graphCopy = new Map<Node, Node>();
	// Create a copy of the input node and add it to the map.
	graphCopy.set(node, new Node(node.val));
	// While there are nodes to visit.
	while (toVisit.length) {
		const currentNode = toVisit.pop();
		// Every visited node will have a copy in the map.
		const copyNode = graphCopy.get(currentNode);
		// For each neighbor of the current node.
		for (const neighbor of currentNode.neighbors) {
			// If the neighbor has not been copied yet.
			if (!graphCopy.has(neighbor)) {
				// Create a copy of the neighbor and add it to the map.
				graphCopy.set(neighbor, new Node(neighbor.val));
				// Add the neighbor to the array of nodes to visit.
				toVisit.push(neighbor);
			}
			const neighborCopy = graphCopy.get(neighbor);
			// Add the copy of the neighbor to the neighbors of the current node copy.
			copyNode.neighbors.push(neighborCopy);
		}
	}
	// Return the copy of the input node.
	return graphCopy.get(node);
}
