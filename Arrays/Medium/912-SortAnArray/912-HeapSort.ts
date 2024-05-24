/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return heapSort(numbers);
}

function heapSort(numbers: number[]): number[] {
	const beforeLeaves = Math.trunc((numbers.length - 2) / 2);
	for (let i = beforeLeaves; i >= 0; i--) {
		maxHeapify(i, numbers.length, numbers);
	}

	for (let heapSize = numbers.length - 1; heapSize > 0; heapSize--) {
		swap(0, heapSize, numbers);
		maxHeapify(0, heapSize, numbers);
	}
	return numbers;
}

function maxHeapify(parent: number, heapSize: number, array: number[]) {
	const leafStart = Math.trunc(heapSize / 2);
	while (parent < leafStart) {
		const left = parent * 2 + 1;
		const right = parent * 2 + 2;
		let largest = parent;
		if (left < heapSize && array[left] > array[largest]) {
			largest = left;
		}
		if (right < heapSize && array[right] > array[largest]) {
			largest = right;
		}
		if (largest === parent) {
			break;
		}
		swap(parent, largest, array);
		parent = largest;
	}
}

function swap(first: number, second: number, numbers: number[]) {
	[numbers[first], numbers[second]] = [numbers[second], numbers[first]];
}
