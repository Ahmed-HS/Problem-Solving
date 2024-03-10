/**
 * Medium
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */
function evalRPN(tokens: string[]): number {
	const operands: number[] = [];
	const operators = {
		"+": (x, y) => x + y,
		"-": (x, y) => x - y,
		"*": (x, y) => x * y,
		"/": (x, y) => Math.trunc(x / y),
	};
	for (const token of tokens) {
		if (token in operators) {
			const operand1 = operands.pop();
			const operand2 = operands.pop();
			const result = operators[token](operand2, operand1);
			operands.push(result);
		} else {
			operands.push(+token);
		}
	}
	return operands[0];
}
