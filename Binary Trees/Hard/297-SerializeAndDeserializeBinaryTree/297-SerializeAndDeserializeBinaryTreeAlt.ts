/**
 * Hard
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 */
function serialize(root: TreeNode | null): string {
	const levels = [];
	const toVisit = [root].filter((node) => node !== null);
	while (toVisit.length) {
		const node = toVisit.shift();
		levels.push(node?.val ?? "#");
		if (!node) continue;
		const children = [node.left, node.right];
		toVisit.push(...children);
	}
	return levels.join(",");
}

function deserialize(data: string): TreeNode | null {
	if (!data.length) return null;
	const values = data.split(",");
	const root = new TreeNode(+values[0]);
	const toVisit = [root];
	for (let i = 1; i < values.length; i++) {
		const parent = toVisit.shift();
		if (values[i] !== "#") {
			const left = new TreeNode(+values[i]);
			parent.left = left;
			toVisit.push(left);
		}
		i++;
		if (values[i] !== "#") {
			const right = new TreeNode(+values[i]);
			parent.right = right;
			toVisit.push(right);
		}
	}
	return root;
}
