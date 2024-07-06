/**
 * Medium
 * https://leetcode.com/problems/number-of-provinces/
 */
function findCircleNum(isConnected: number[][]): number {
	const visited: boolean[] = new Array(isConnected.length).fill(false);

	function dfs(node: number) {
		visited[node] = true;
		for (let i = 0; i < isConnected.length; i++) {
			if (isConnected[node][i] === 1 && i !== node && !visited[i]) {
				dfs(i);
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
