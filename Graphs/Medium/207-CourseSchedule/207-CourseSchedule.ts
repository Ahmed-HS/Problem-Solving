/**
 * Medium
 * https://leetcode.com/problems/course-schedule/
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
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
	let seen = 0;
	while (toVisit.length) {
		const node = toVisit.pop();
		seen++;
		for (const neighbour of graph[node]) {
			inDegree[neighbour]--;
			if (inDegree[neighbour] === 0) toVisit.push(neighbour);
		}
	}
	return seen === numCourses;
}
