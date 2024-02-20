/**
 * Easy
 * https://leetcode.com/problems/longest-common-prefix/
 */
function longestCommonPrefix(strs: string[]): string {
	/**
	 * We iterate through each character of the first string.
	 * For each character, we also iterate through every other string in the array.
	 * If the character at the current index in any of the strings
	 * does not match the character at the same index in the first string,
	 * we return the substring of the first string from index 0 up to (but not including) the current index.
	 */
	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (strs[j][i] !== strs[0][i]) {
				return strs[0].slice(0, i);
			}
		}
	}
	/**
	 * If we reach this point, it means that the first string
	 * is the longest common prefix of all the strings in the array.
	 */
	return strs[0];
}
