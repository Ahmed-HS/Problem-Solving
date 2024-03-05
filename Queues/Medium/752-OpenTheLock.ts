/**
 * Medium
 * https://leetcode.com/problems/open-the-lock/
 */
function openLock(deadends: string[], target: string): number {
	const triedCombinations = new Set<string>([...deadends]);
	// If the target or "0000" is a deadend, return -1 as it's impossible to reach the target
	if (triedCombinations.has(target) || triedCombinations.has("0000")) {
		return -1;
	}
	// If the target is "0000", return 0 as we're already at the target
	if (target === "0000") {
		return 0;
	}
	// Initialize a queue with "0000" to store the lock combinations to try
	const lockCombinations = ["0000"];
	/**
	 * Initialize a counter for the number of turns.
	 * We try all possible combinations at each level
	 * before moving to the next level.
	 */
	let lockTurns = 0;
	// Continue as long as there are combinations to try
	while (lockCombinations.length) {
		lockTurns++;
		// Get the number of combinations at the current level
		const levelCount = lockCombinations.length;
		for (let i = 0; i < levelCount; i++) {
			const combination = lockCombinations.shift()!;
			// Get the next possible combinations
			const neighbors = nextCombinations(combination);
			for (const newCombination of neighbors) {
				// If the new combination has already been tried, skip it
				if (triedCombinations.has(newCombination)) {
					continue;
				}
				// If the new combination is the target, return the number of turns
				if (newCombination === target) {
					return lockTurns;
				}
				// Add the new combination to the queue and the set of tried combinations
				lockCombinations.push(newCombination);
				triedCombinations.add(newCombination);
			}
		}
	}
	// If the target cannot be reached, return -1
	return -1;
}

function nextCombinations(combination: string): string[] {
	const neighbors: string[] = [];

	/**
	 * For each digit in the combination,
	 * we can either increment it by 1 or decrement it by 1.
	 * After incrementing or decrementing, we need to take
	 * the modulo 10 to ensure the digit is between 0 and 9.
	 * When decrementing, we need to add 10 to the digit
	 * before taking the modulo to ensure the result is positive.
	 * (e.g. 0 - 1 = -1 + 10 = 9 % 10 = 9)
	 */
	const increment = [1, 9];

	for (let j = 0; j < 4; j++) {
		for (let k = 0; k < 2; k++) {
			const newCombination = [...combination];
			// Get the current digit and increment it
			let digit = +newCombination[j];
			digit = (digit + increment[k]) % 10;
			// Update the digit in the new combination
			newCombination[j] = digit.toString();
			neighbors.push(newCombination.join(""));
		}
	}
	return neighbors;
}
