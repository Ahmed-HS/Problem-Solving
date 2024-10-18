/**
 * Medium
 * https://leetcode.com/problems/course-schedule-ii/
 */
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
	const graph = Array.from({ length: numCourses }, () => []);
	const inDegree = new Array(numCourses).fill(0);
	for (const [to, from] of prerequisites) {
		graph[from].push(to);
		inDegree[to]++;
	}
	const toVisit = [];
	for (let node = 0; node < numCourses; node++) {
		if (inDegree[node] === 0) toVisit.push(node);
	}
	const sorted = [];
	while (toVisit.length) {
		const node = toVisit.pop();
		sorted.push(node);
		for (const neighbour of graph[node]) {
			inDegree[neighbour]--;
			if (inDegree[neighbour] === 0) toVisit.push(neighbour);
		}
	}
	return sorted.length === numCourses ? sorted : [];
}
