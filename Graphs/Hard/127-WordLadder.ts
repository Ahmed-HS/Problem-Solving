/**
 * Hard
 * https://leetcode.com/problems/word-ladder/
 */
function ladderLength(
	startWord: string,
	endWord: string,
	wordList: string[]
): number {
	const validWords = new Set(wordList);
	if (!validWords.has(endWord)) return 0;
	const seen = new Set();
	const alphabet = Array.from({ length: 26 }, (_, i) =>
		String.fromCharCode(97 + i)
	);
	const toVisit = [startWord];
	let steps = 1;
	while (toVisit.length) {
		steps++;
		let levelLength = toVisit.length;
		while (levelLength--) {
			const word = toVisit.shift();
			for (let i = 0; i < word.length; i++) {
				for (const letter of alphabet) {
					const nextWordArray = [...word];
					nextWordArray[i] = letter;
					const nextWord = nextWordArray.join("");
					if (nextWord === endWord) return steps;
					if (seen.has(nextWord) || !validWords.has(nextWord))
						continue;
					seen.add(nextWord);
					toVisit.push(nextWord);
				}
			}
		}
	}
	return 0;
}
