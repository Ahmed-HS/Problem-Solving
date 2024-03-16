/**
 * Medium
 * https://leetcode.com/problems/decode-string/
 */
function decodeString(s: string): string {
	return decode(0, s.length, s);
}

function decode(start: number, end: number, s: string): string {
	let opening = start;
	// Find the first opening bracket.
	while (s[opening] !== "[" && opening <= end) {
		opening++;
	}
	// If there is no opening bracket, return the string as is.
	if (opening === end + 1) {
		return s.slice(start, end + 1);
	}

	// Find the closing bracket of the opening bracket.
	let openingCount = 1;
	let closing = opening;
	while (openingCount) {
		closing++;
		openingCount += s[closing] === "[" ? 1 : 0;
		openingCount -= s[closing] === "]" ? 1 : 0;
	}

	// Find the repetition count of the expression between the opening and closing brackets.
	let repetition = "";
	let digit = opening - 1;
	while (!isNaN(+s[digit])) {
		repetition = s[digit] + repetition;
		digit--;
	}
	// Recursively decode the expression between the opening and closing brackets.
	const repeated = decode(opening + 1, closing - 1, s).repeat(+repetition);
	// Recursively decode the remaining string after the closing bracket.
	const remaining = closing !== end ? decode(closing + 1, end, s) : "";
	// Return the word before the opening bracket plus the repeated expression plus the remaining string.
	return s.slice(start, digit + 1) + repeated + remaining;
}
