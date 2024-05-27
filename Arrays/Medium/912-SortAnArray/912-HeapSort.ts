/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return heapSort(numbers);
}

function heapSort(numbers: number[]): number[] {
	const lastParent = getParent(numbers.length - 1);
	for (let i = lastParent; i >= 0; i--) {
		maxHeapifyDown(i, numbers.length, numbers);
	}

	for (let heapSize = numbers.length - 1; heapSize > 0; heapSize--) {
		swap(0, heapSize, numbers);
		maxHeapifyDown(0, heapSize, numbers);
	}
	return numbers;
}

function maxHeapifyDown(parent: number, heapSize: number, array: number[]) {
	while (hasLeftChild(parent, heapSize)) {
		let largest = getLeftChild(parent);
		if (
			hasRightChild(parent, heapSize) &&
			array[getRightChild(parent)] > array[largest]
		) {
			largest = getRightChild(parent);
		}
		if (array[parent] >= array[largest]) {
			break;
		}
		swap(parent, largest, array);
		parent = largest;
	}
}

function getLeftChild(parent: number): number {
	return parent * 2 + 1;
}

function getRightChild(parent: number): number {
	return parent * 2 + 2;
}

function getParent(child: number): number {
	return Math.trunc((child - 1) / 2);
}

function hasLeftChild(parent: number, heapSize: number): boolean {
	return getLeftChild(parent) < heapSize;
}

function hasRightChild(parent: number, heapSize: number): boolean {
	return getRightChild(parent) < heapSize;
}

function swap(first: number, second: number, numbers: number[]) {
	[numbers[first], numbers[second]] = [numbers[second], numbers[first]];
}
