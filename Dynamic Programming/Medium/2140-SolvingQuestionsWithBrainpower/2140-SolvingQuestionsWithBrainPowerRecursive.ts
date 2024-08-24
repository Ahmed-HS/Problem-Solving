/**
 * Medium
 * https://leetcode.com/problems/solving-questions-with-brainpower/
 */
function mostPoints(questions: number[][]): number {
	const points = new Array(questions.length);
	function maxPoints(current: number) {
		if (current >= questions.length) return 0;
		if (points[current] !== undefined) return points[current];
		const skip = maxPoints(current + 1);
		const solve =
			maxPoints(current + questions[current][1] + 1) +
			questions[current][0];
		points[current] = Math.max(skip, solve);
		return points[current];
	}
	return maxPoints(0);
}
