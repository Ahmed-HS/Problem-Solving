/**
 * Medium
 * https://leetcode.com/problems/solving-questions-with-brainpower/
 */
function mostPoints(questions: number[][]): number {
	const points = new Array(questions.length + 1).fill(0);
	for (let i = questions.length - 1; i >= 0; i--) {
		const skip = points[i + 1];
		const nextToSolve = Math.min(i + questions[i][1] + 1, questions.length);
		const solve = questions[i][0] + points[nextToSolve];
		points[i] = Math.max(skip, solve);
	}
	return points[0];
}
