/**
 * Easy
 * https://leetcode.com/problems/find-the-town-judge/
 */
function findJudge(n: number, trust: number[][]): number {
	const trustCount = new Map<number, number[]>();
	for (let i = 1; i <= n; i++) trustCount.set(i, [0, 0]);
	for (const [person, trustedPerson] of trust) {
		trustCount.get(person)[0]++;
		trustCount.get(trustedPerson)[1]++;
	}
	for (let i = 1; i <= n; i++) {
		const [myTrustCount, trustedCount] = trustCount.get(i);
		if (myTrustCount === 0 && trustedCount === n - 1) return i;
	}
	return -1;
}
