/**
 * Hard
 * https://leetcode.com/problems/critical-connections-in-a-network/
 */
function criticalConnections(n: number, connections: number[][]): number[][] {
	// Initialize the graph as a map where each node points to its list of neighbors
	const graph = new Map<number, number[]>();
	// Create an empty list for each node in the graph
	for (let i = 0; i < n; i++) graph.set(i, []);
	// Populate the graph with the given connections
	for (const [source, target] of connections) {
		graph.get(source)!.push(target);
		graph.get(target)!.push(source);
	}

	// This will store the critical connections (bridges)
	const bridges: number[][] = [];
	// This array will keep track of the discovery times of the nodes
	const discoveryTime = new Array(n).fill(0);
	// Initialize the current discovery time counter
	let currentTime = 1;

	function dfs(node: number, parent: number): number {
		// Set the discovery time for the current node
		discoveryTime[node] = currentTime++;
		// Initialize the minimum discovery time to the current node's discovery time
		let minDiscoveryTime = discoveryTime[node];

		for (const neighbor of graph.get(node)!) {
			// Skip the parent node to avoid going back in the DFS tree
			if (neighbor === parent) continue;
			// If the neighbor has not been visited yet
			if (discoveryTime[neighbor] === 0) {
				// Recursively perform DFS on the neighbor
				const neighborTime = dfs(neighbor, node);
				// Update the minimum discovery time
				minDiscoveryTime = Math.min(minDiscoveryTime, neighborTime);
				/**
				 * If the neighbor's discovery time is greater, then the edge connecting
				 * the current node and the neighbor is a bridge, because it is not part
				 * of a cycle that could allow the current node to reach an ancestor of
				 * with a lower discovery time.
				 */
				if (neighborTime > discoveryTime[node]) {
					bridges.push([node, neighbor]);
				}
			} else {
				// If the neighbor is already visited, update the minimum discovery time
				minDiscoveryTime = Math.min(
					minDiscoveryTime,
					discoveryTime[neighbor]
				);
			}
		}

		// Return the minimum discovery time of the current node
		return minDiscoveryTime;
	}

	// Start DFS from the first node (node 0), with an initial parent of -1 (no parent)
	dfs(0, -1);
	// Return the list of bridges
	return bridges;
}
