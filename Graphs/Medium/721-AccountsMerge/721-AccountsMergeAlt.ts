/**
 * Medium
 * https://leetcode.com/problems/accounts-merge/
 */
function accountsMerge(accounts: string[][]): string[][] {
	const emailName = new Map<string, string>();
	const emailGraph = new Map<string, string[]>();
	for (const account of accounts) {
		const name = account[0];
		emailName.set(account[account.length - 1], name);
		for (let i = 1; i < account.length - 1; i++) {
			const email = account[i];
			emailName.set(email, name);
			const email1 = account[i];
			const email2 = account[i + 1];
			const email1Neighbours = emailGraph.get(email1) ?? [];
			const email2Neighbours = emailGraph.get(email2) ?? [];
			email1Neighbours.push(email2);
			email2Neighbours.push(email1);
			emailGraph.set(email1, email1Neighbours);
			emailGraph.set(email2, email2Neighbours);
		}
	}

	const visited = new Set<string>();

	function visit(email: string) {
		if (visited.has(email)) return [];
		visited.add(email);
		const emails = [email];
		const neighbours = emailGraph.get(email) ?? [];
		for (const neighbour of neighbours) {
			emails.push(...visit(neighbour));
		}
		return emails;
	}

	const allEmails = emailName.keys();
	const people = [];
	for (const email of allEmails) {
		if (visited.has(email)) continue;
		const name = emailName.get(email);
		const extraEmails = visit(email);
		extraEmails.sort();
		people.push([name, ...extraEmails]);
	}
	return people;
}
