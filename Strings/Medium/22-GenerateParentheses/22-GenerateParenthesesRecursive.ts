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
	function generate(openings: number, closings: number, current: string) {
		if (current.length === n * 2) {
			validParenthesis.push(current);
			return;
		}
		if (openings < n) {
			generate(openings + 1, closings, current + "(");
		}
		if (closings < openings) {
			generate(openings, closings + 1, current + ")");
		}
	}
	generate(0, 0, "");
	return validParenthesis;
}
