/**
    Medium
    https://leetcode.com/problems/kth-largest-element-in-an-array/
*/
function findKthLargest(nums: number[], k: number): number {
    let start = 0;
    let end = nums.length - 1;
    k = nums.length - k;

    while (start < end) {
        let pivot = partition(nums, start, end);
        if (pivot < k) {
            start = pivot + 1;
        } else {
            end = pivot;
        }
    }
    return nums[k];
};

function partition(nums: number[], start: number, end: number): number {

    const randomIndex = Math.floor(Math.random() * (end - start + 1) + start);
    const pivot = nums[randomIndex];
    while (start <= end) {
        while (nums[start] < pivot) {
            start++;
        }
        while (nums[end] > pivot) {
            end--;
        }
        if (start <= end) {
            swap(nums, start, end);
            start++;
            end--;
        }
    }
    return end;
}

function swap(nums: number[], i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}