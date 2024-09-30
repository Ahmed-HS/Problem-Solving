/**
 * Medium
 * https://leetcode.com/problems/accounts-merge/
 */
function accountsMerge(accounts: string[][]): string[][] {
	const emailAccounts = new Map<string, number[]>();
	for (let id = 0; id < accounts.length; id++) {
		for (let i = 1; i < accounts[id].length; i++) {
			const email = accounts[id][i];
			if (!emailAccounts.has(email)) {
				emailAccounts.set(email, []);
			}
			emailAccounts.get(email).push(id);
		}
	}

	const visited = new Array<boolean>(accounts.length).fill(false);

	function visit(id: number) {
		if (visited[id]) return new Set<string>();
		visited[id] = true;
		const emailSet = new Set();
		for (let i = 1; i < accounts[id].length; i++) {
			const email = accounts[id][i];
			emailSet.add(email);
			for (const neighbour of emailAccounts.get(email)) {
				visit(neighbour).forEach((mail) => emailSet.add(mail));
			}
		}
		return emailSet;
	}

	const people = [];
	for (let id = 0; id < accounts.length; id++) {
		if (visited[id]) continue;
		const name = accounts[id][0];
		const extraEmails = [...visit(id)].sort();
		people.push([name, ...extraEmails]);
	}
	return people;
}
