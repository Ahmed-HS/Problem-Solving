/**
 * Medium
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */
function letterCombinations(digits: string): string[] {
	if (!digits.length) return [];
	const mappings = {
		"2": "abc",
		"3": "def",
		"4": "ghi",
		"5": "jkl",
		"6": "mno",
		"7": "pqrs",
		"8": "tuv",
		"9": "wxyz",
	};
	const letterCombinations = [""];
	let current = 0;
	while (current < digits.length) {
		const size = letterCombinations.length;
		for (let i = 0; i < size; i++) {
			const prefix = letterCombinations.shift();
			for (const letter of mappings[digits[current]]) {
				letterCombinations.push(prefix + letter);
			}
		}
		current++;
	}
	return letterCombinations;
}
