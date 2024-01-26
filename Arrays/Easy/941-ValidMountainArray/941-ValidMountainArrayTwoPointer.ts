/**
    Easy
    https://leetcode.com/problems/valid-mountain-array/
*/
function validMountainArray(arr: number[]): boolean {

    let left = 0;
    let right = arr.length - 1;

    while (left + 2 < arr.length && arr[left] < arr[left + 1]) {
        left++;
    }

    while (right > 1 && arr[right] < arr[right - 1]) {
        right--;
    }

    return left === right && arr.length > 1;
}