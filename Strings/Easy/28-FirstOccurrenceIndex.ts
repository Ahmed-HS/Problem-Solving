/**
 * Easy
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */
function strStr(haystack: string, needle: string): number {
	/**
	 * We need to check if the 'needle' is a substring of the haystack.
	 * We loop through every index of the haystack and check if
	 * the substring starting from that index is equal to the needle.
	 * If the starting index plus the length of the needle minus one
	 * is greater than or equal to the length of the haystack,
	 * we stop because there are not enough characters left in the haystack to
	 * compare with the needle.
	 */
	for (let i = 0; i + needle.length - 1 < haystack.length; i++) {
		for (let j = 0; j <= needle.length; j++) {
			if (j === needle.length) {
				return i;
			}
			if (haystack[i + j] !== needle[j]) {
				break;
			}
		}
	}
	return -1;
}
