/**
 * Medium
 * https://leetcode.com/problems/group-shifted-strings/
 */
function groupStrings(words: string[]): string[][] {
	const sequenceGroups = new Map();
	for (const word of words) {
		const start = getSequenceStart(word);
		const group = sequenceGroups.get(start) ?? [];
		group.push(word);
		sequenceGroups.set(start, group);
	}
	return [...sequenceGroups.values()];
}

function getSequenceStart(word: string): string {
	const aCode = "a".charCodeAt(0);
	const distanceFromA = word.charCodeAt(0) - aCode;
	const start = [...word];
	for (let i = 0; i < word.length; i++) {
		const letterIndex = start[i].charCodeAt(0) - aCode;
		const distance = (letterIndex - distanceFromA + 26) % 26;
		const letterCode = aCode + distance;
		start[i] = String.fromCharCode(letterCode);
	}
	return start.join("");
}
