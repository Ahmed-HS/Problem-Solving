/**
 * Easy
 * https://leetcode.com/problems/first-bad-version/
 */
const solution = function (isBadVersion: any) {
	return function (n: number): number {
		let start = 1;
		let end = n;
		while (start < end) {
			const mid = start + Math.trunc((end - start) / 2);
			if (isBadVersion(mid)) {
				end = mid;
			} else {
				start = mid + 1;
			}
		}
		return start;
	};
};
