/**
 * Medium
 * https://leetcode.com/problems/decode-ways/
 */
function numDecodings(word: string): number {
	const decodeWays = new Array(word.length + 1).fill(0);
	decodeWays[word.length] = 1;
	decodeWays[word.length - 1] = word[word.length - 1] === "0" ? 0 : 1;
	for (let current = word.length - 2; current >= 0; current--) {
		if (word[current] === "0") continue;
		const takeOne = decodeWays[current + 1];
		const twoDigits = +word.slice(current, current + 2);
		const takeTwo = twoDigits < 27 ? decodeWays[current + 2] : 0;
		decodeWays[current] = takeOne + takeTwo;
	}
	return decodeWays[0];
}
