/**
 * Medium
 * https://leetcode.com/problems/decode-ways/
 */
function numDecodings(word: string): number {
	let decodeTwo = 1;
	let decodeOne = word[word.length - 1] === "0" ? 0 : 1;
	for (let current = word.length - 2; current >= 0; current--) {
		if (word[current] === "0") {
			decodeTwo = decodeOne;
			decodeOne = 0;
			continue;
		}
		const takeOne = decodeOne;
		const twoDigits = +word.slice(current, current + 2);
		const takeTwo = twoDigits < 27 ? decodeTwo : 0;
		decodeTwo = decodeOne;
		decodeOne = takeOne + takeTwo;
	}
	return decodeOne;
}
