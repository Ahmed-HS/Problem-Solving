/**
 * Easy
 * https://leetcode.com/problems/isomorphic-strings/
 */
function isIsomorphic(s: string, t: string): boolean {
	const sMap = new Map();
	const tMap = new Map();
	for (let i = 0; i < s.length; i++) {
		if (sMap.get(s[i]) !== tMap.get(t[i])) {
			return false;
		}
		sMap.set(s[i], i);
		tMap.set(t[i], i);
	}
	return true;
}
