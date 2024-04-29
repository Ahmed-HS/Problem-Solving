/**
 * Medium
 * https://leetcode.com/problems/group-anagrams/
 */
function groupAnagrams(words: string[]): string[][] {
	const anagrams = new Map<string, string[]>();
	for (const word of words) {
		const key = [...word].sort().join("");
		const list = anagrams.get(key) ?? [];
		list.push(word);
		anagrams.set(key, list);
	}
	return [...anagrams.values()];
}
