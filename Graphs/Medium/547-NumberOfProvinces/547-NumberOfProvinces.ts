/**
 * Medium
 * https://leetcode.com/problems/number-of-provinces/
 */
function findCircleNum(isConnected: number[][]): number {
	const visited: boolean[] = new Array(isConnected.length).fill(false);
	function getNeighbours(node: number): number[] {
		const neighbours = [];
		for (let i = 0; i < isConnected.length; i++) {
			if (isConnected[node][i] === 1 && i !== node && !visited[i]) {
				neighbours.push(i);
			}
		}
		return neighbours;
	}

	function dfs(node: number) {
		const toVisit = [node];
		while (toVisit.length) {
			const current = toVisit.pop();
			const neighbours = getNeighbours(current);
			for (const neighbour of neighbours) {
				visited[neighbour] = true;
				toVisit.push(neighbour);
			}
		}
	}

	let provinces = 0;
	for (let i = 0; i < isConnected.length; i++) {
		if (!visited[i]) {
			dfs(i);
			provinces++;
		}
	}
	return provinces;
}
