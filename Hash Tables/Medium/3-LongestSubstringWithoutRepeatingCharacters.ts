/**
 * Medium
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
function lengthOfLongestSubstring(word: string): number {
	/**
	 * We use a sliding window approach to find the longest substring without repeating characters.
	 * If we encounter a character that is already seen in the current window,
	 * we move the start of the window to the character's last occurrence + 1,
	 * Only if the last occurrence index is greater than or equal to the start of the window,
	 * because we don't want to move start of the window backwards.
	 * So we remove the repeating character from the window.
	 */
	const lastOccurrence = new Map<string, number>();
	let start = 0;
	let maxUniqueLength = 0;
	for (let end = 0; end < word.length; end++) {
		const lastIndex = lastOccurrence.get(word[end]);
		if (lastIndex !== undefined && lastIndex >= start) {
			start = lastIndex + 1;
		}
		lastOccurrence.set(word[end], end);
		maxUniqueLength = Math.max(end - start + 1, maxUniqueLength);
	}
	return maxUniqueLength;
}
