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
	let letterCombinations = [""];
	for (const digit of digits) {
		const newCombinations = [];
		for (const letter of mappings[digit]) {
			for (const combination of letterCombinations) {
				newCombinations.push(combination + letter);
			}
		}
		letterCombinations = newCombinations;
	}
	return letterCombinations;
}
