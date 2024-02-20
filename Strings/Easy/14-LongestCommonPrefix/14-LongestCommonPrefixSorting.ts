/**
 * Easy
 * https://leetcode.com/problems/longest-common-prefix/
 */
function longestCommonPrefix(strs: string[]): string {
	/**
	 * By sorting the strings, words with the same prefix
	 * will be next to each other, so the
	 * common prefix of the first and last strings
	 * will surely be the longest common prefix of all the strings.
	 */
	strs.sort();
	const first = strs[0];
	const last = strs[strs.length - 1];
	let i = 0;
	while (i < first.length && first[i] === last[i]) {
		i++;
	}
	return first.slice(0, i);
}
