/**
 * Medium
 * https://leetcode.com/problems/decode-string/
 */
function decodeString(s: string): string {
	let word = "";
	let count = "";
	const toRepeat: string[] = [];
	for (const letter of s) {
		/**
		 * If the letter is a "[", we push the current word
		 * and the repeat count of the expression between this
		 * "[" and its corresponding "]" then we reset the
		 * current word and count to empty strings.
		 */
		if (letter === "[") {
			toRepeat.push(word);
			toRepeat.push(count);
			count = "";
			word = "";
		} else if (letter === "]") {
			/**
			 * If the letter is a "]", we pop the last word
			 * seen before the opening "[" of this closing "]" and
			 * the repeat count of the current word between the "[" and "]",
			 * then we set the current word to be the last word plus
			 * the current word repeated the number of times of the last count.
			 */
			const lastCount = toRepeat.pop();
			const lastWord = toRepeat.pop();
			word = lastWord + word.repeat(+lastCount);
		} else if (!isNaN(+letter)) {
			count += letter;
		} else {
			word += letter;
		}
	}
	return word;
}
