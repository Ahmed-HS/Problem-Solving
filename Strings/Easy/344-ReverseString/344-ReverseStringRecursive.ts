/**
 * Easy
 * https://leetcode.com/problems/reverse-string/
 */
function reverseString(s: string[]): void {
	function reverse(start: number, end: number) {
		if (start >= end) return;
		[s[start], s[end]] = [s[end], s[start]];
		reverse(start + 1, end - 1);
	}
	reverse(0, s.length - 1);
}
