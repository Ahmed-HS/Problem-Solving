/**
 * Medium
 * https://leetcode.com/problems/lexicographically-smallest-equivalent-string/
 */
function smallestEquivalentString(
	s1: string,
	s2: string,
	baseStr: string
): string {
	const graph = new Array(26).fill(0).map(() => new Set<number>());
	const visited = new Array<boolean>(26).fill(false);
	const aCode = "a".charCodeAt(0);

	for (let i = 0; i < s1.length; i++) {
		const s1Id = s1[i].charCodeAt(0) - aCode;
		const s2Id = s2[i].charCodeAt(0) - aCode;
		graph[s1Id].add(s2Id);
		graph[s2Id].add(s1Id);
	}

	function visit(letter: number) {
		if (visited[letter]) return [];
		visited[letter] = true;
		const letters = [letter];
		for (const neighbour of graph[letter]) {
			letters.push(...visit(neighbour));
		}
		return letters;
	}

	const smallestWord = [];
	const letterMapping = new Array<number>(26);
	for (const letter of baseStr) {
		const id = letter.charCodeAt(0) - aCode;
		if (!visited[id]) {
			const letterGroup = visit(id);
			letterGroup.sort((a, b) => a - b);
			letterGroup.forEach((c) => (letterMapping[c] = letterGroup[0]));
		}
		const mapped = letterMapping[id] + aCode;
		smallestWord.push(String.fromCharCode(mapped));
	}
	return smallestWord.join("");
}
