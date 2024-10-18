/**
 * Medium
 * https://leetcode.com/problems/course-schedule-ii/
 */
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
	const graph = Array.from({ length: numCourses }, () => []);
	const visited = new Array(numCourses).fill(0);
	const sorted = new Array(numCourses);
	let next = numCourses - 1;
	for (const [to, from] of prerequisites) {
		graph[from].push(to);
	}
	function hasCycle(node: number) {
		if (visited[node] === 1) return true;
		if (visited[node] === 2) return false;
		visited[node] = 1;
		for (const neighbour of graph[node]) {
			if (hasCycle(neighbour)) return true;
		}
		visited[node] = 2;
		sorted[next] = node;
		next--;
		return false;
	}
	for (let node = 0; node < numCourses; node++) {
		if (hasCycle(node)) return [];
	}
	return sorted;
}
