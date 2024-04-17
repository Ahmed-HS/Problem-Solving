/**
 * Medium
 * https://leetcode.com/problems/generate-parentheses/
 */
function generateParenthesis(n: number): string[] {
	/**
	 * We create a recursive function to generate the valid parenthesis.
	 * We keep track of the number of openings and closings we have used.
	 * We also keep track of the current string we are building.
	 * If the current string's length is n*2 then we have used all parenthesis pairs.
	 * If we have openings left, we can always add an opening parenthesis.
	 * If the number of closings used is less than the number of openings used,
	 * we can always add a closing parenthesis, otherwise if the number of closings used
	 * is greater than or equal to the number of openings used, we can't add a closing
	 * parenthesis without an opening being present. ex: "())", "()())" , "(()))" are invalid.
	 */
	const validParenthesis = [];
	const remainingParenthesis = [[0, 0, ""]];
	while (remainingParenthesis.length) {
		const [openings, closings, current] = remainingParenthesis.pop();
		if (current.toString().length === n * 2) {
			validParenthesis.push(current);
			continue;
		}
		if (+openings < n) {
			remainingParenthesis.push([+openings + 1, closings, current + "("]);
		}
		if (closings < openings) {
			remainingParenthesis.push([openings, +closings + 1, current + ")"]);
		}
	}
	return validParenthesis;
}
