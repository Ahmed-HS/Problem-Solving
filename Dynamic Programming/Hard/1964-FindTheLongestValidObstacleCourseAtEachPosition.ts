/**
 * Hard
 * https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/
 */
function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
	const subsequenceTails = new Array(obstacles.length);
	const maxSubsequenceUntil = new Array(obstacles.length);
	let maxSubsequenceLength = 0;
	for (const [index, obstacle] of obstacles.entries()) {
		const insertionIndex = lastOccurrence(
			obstacle,
			maxSubsequenceLength - 1,
			subsequenceTails
		);
		subsequenceTails[insertionIndex] = obstacle;
		maxSubsequenceUntil[index] = insertionIndex + 1;
		if (insertionIndex === maxSubsequenceLength) maxSubsequenceLength++;
	}
	return maxSubsequenceUntil;
}

function lastOccurrence(
	target: number,
	end: number,
	numbers: number[]
): number {
	let start = 0;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (numbers[mid] <= target) {
			start = mid + 1;
		} else {
			end = mid;
		}
	}
	return start;
}
