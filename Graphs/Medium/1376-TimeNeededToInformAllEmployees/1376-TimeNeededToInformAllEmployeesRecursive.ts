/**
 * Medium
 * https://leetcode.com/problems/time-needed-to-inform-all-employees/
 */
function numOfMinutes(
	n: number,
	headID: number,
	manager: number[],
	informTime: number[]
): number {
	/**
	 * For each employee, we will calculate the time it takes
	 * to reach the head of the company.
	 * We will store this time in the maxTimeToEachEmployee array.
	 * We will also set the manager of each employee to -1 to
	 * indicate that we have already calculated the time to reach
	 * the head of the company.
	 */
	const maxTimeToEachEmployee = [...informTime];
	function dfsEmployeeToHead(employee: number): number {
		if (manager[employee] === -1) {
			return maxTimeToEachEmployee[employee];
		}
		maxTimeToEachEmployee[employee] += dfsEmployeeToHead(manager[employee]);
		manager[employee] = -1;
		return maxTimeToEachEmployee[employee];
	}
	/**
	 * We will iterate through each employee and calculate the time it
	 * takes to reach the head of the company. We will keep track of the
	 * maximum time it takes to reach the head of the company.
	 */
	let maxInformTime = -1;
	for (let employee = 0; employee < n; employee++) {
		maxInformTime = Math.max(maxInformTime, dfsEmployeeToHead(employee));
	}
	return maxInformTime;
}
