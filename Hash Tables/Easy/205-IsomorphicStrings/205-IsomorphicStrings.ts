/**
 * Easy
 * https://leetcode.com/problems/isomorphic-strings/
 */
function isIsomorphic(s: string, t: string): boolean {
	return transform(s) === transform(t);
}

function transform(word: string) {
	const result = [];
	const mapping = new Map();
	let character = "a";
	for (const letter of word) {
		const id = mapping.get(letter) ?? character;
		if (id === character) {
			mapping.set(letter, character);
			character = String.fromCharCode(character.charCodeAt(0) + 1);
		}
		result.push(id);
	}
	return result.join("");
}
