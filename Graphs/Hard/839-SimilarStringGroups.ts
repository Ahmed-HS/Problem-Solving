/**
 * Hard
 * https://leetcode.com/problems/similar-string-groups/
 */
function numSimilarGroups(strs: string[]): number {
	const graph = new Array(strs.length).fill(0).map(() => []);
	for (let i = 0; i < strs.length; i++) {
		for (let j = i + 1; j < strs.length; j++) {
			if (!areSimilar(strs[i], strs[j])) continue;
			graph[i].push(j);
			graph[j].push(i);
		}
	}
	const visited = new Array<boolean>(strs.length);
	function visit(index: number) {
		if (visited[index]) return;
		visited[index] = true;
		for (const neighbour of graph[index]) {
			visit(neighbour);
		}
	}
	let groupCount = 0;
	for (let i = 0; i < strs.length; i++) {
		if (visited[i]) continue;
		visit(i);
		groupCount++;
	}
	return groupCount;
}

function areSimilar(word1: string, word2: string): boolean {
	let mismatchCount = 0;
	for (let i = 0; i < word1.length; i++) {
		if (word1[i] !== word2[i]) mismatchCount++;
		if (mismatchCount > 2) return false;
	}
	return true;
}
