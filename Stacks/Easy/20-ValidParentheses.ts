/**
 * Easy
 * https://leetcode.com/problems/valid-parentheses/
 */
function isValid(s: string): boolean {
	const mappings = { "(": ")", "{": "}", "[": "]" };
	const openings = new Set(["(", "{", "["]);
	const openedBrackets = [];
	for (const bracket of s) {
		if (openings.has(bracket)) {
			openedBrackets.push(bracket);
		} else if (bracket !== mappings[openedBrackets.pop()]) {
			return false;
		}
	}
	return openedBrackets.length === 0;
}
