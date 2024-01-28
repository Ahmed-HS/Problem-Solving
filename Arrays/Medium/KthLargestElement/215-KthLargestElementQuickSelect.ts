/**
 * Medium
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */
function findKthLargest(nums: number[], k: number): number {
    let start = 0;
    let end = nums.length - 1;
    k = nums.length - k;
    while (start < end) {
        const pivot = partition(nums, start, end);
        if (pivot === k) {
            break;
        }

        if (pivot < k) {
            start = pivot + 1;
        } else {
            end = pivot - 1;
        }
    }
    return nums[k];
}

function partition(nums: number[], start: number, end: number): number {

    const randomIndex = Math.floor(Math.random() * (end - start + 1) + start);
    swap(end, randomIndex, nums);

    const pivot = nums[end];
    let greaterIndex = start;
    for (let i = start; i < end; i++) {
        if (nums[i] < pivot) {
            swap(i, greaterIndex, nums);
            greaterIndex++;
        }
    }

    swap(end, greaterIndex, nums);

    return greaterIndex;
}

function swap(i: number, j: number, nums: number[]) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}