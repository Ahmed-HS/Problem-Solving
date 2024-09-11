/**
 * Medium
 * https://leetcode.com/problems/decode-ways/
 */
function numDecodings(word: string): number {
	const decodeWays = new Array(word.length);
	function countDecodings(current: number) {
		if (word[current] === "0") return 0;
		if (current >= word.length - 1) return 1;
		if (decodeWays[current] !== undefined) return decodeWays[current];
		const takeOne = countDecodings(current + 1);
		const twoDigits = +word.slice(current, current + 2);
		const takeTwo = twoDigits < 27 ? countDecodings(current + 2) : 0;
		decodeWays[current] = takeOne + takeTwo;
		return decodeWays[current];
	}
	return countDecodings(0);
}
