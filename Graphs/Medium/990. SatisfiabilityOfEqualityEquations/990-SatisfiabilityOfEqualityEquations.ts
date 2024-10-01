/**
 * Medium
 * https://leetcode.com/problems/satisfiability-of-equality-equations/
 */
function equationsPossible(equations: string[]): boolean {
	const graph = new Array(26).fill(0).map(() => []);
	const color = new Array(26).fill(0);
	const aCode = "a".charCodeAt(0);
	for (const equation of equations) {
		const var1Id = equation[0].charCodeAt(0) - aCode;
		const var2Id = equation[equation.length - 1].charCodeAt(0) - aCode;
		if (equation[1] === "=") {
			graph[var1Id].push(var2Id);
			graph[var2Id].push(var1Id);
		}
	}

	let currentColor = 1;

	function visit(node: number) {
		if (color[node] !== 0) return;
		color[node] = currentColor;
		for (const neighbour of graph[node]) {
			visit(neighbour);
		}
	}

	for (let i = 0; i < 26; i++) {
		if (color[i] !== 0) continue;
		visit(i);
		currentColor++;
	}

	for (const equation of equations) {
		const var1Id = equation[0].charCodeAt(0) - aCode;
		const var2Id = equation[equation.length - 1].charCodeAt(0) - aCode;
		if (equation[1] === "!" && color[var1Id] === color[var2Id]) {
			return false;
		}
	}
	return true;
}
