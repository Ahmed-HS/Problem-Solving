/**
    Easy
    https://leetcode.com/problems/valid-mountain-array/
*/
function validMountainArray(arr: number[]): boolean {

    if (arr.length < 3 || arr[0] > arr[1]) {
        return false;
    }

    let decreasing = false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            decreasing = true;
        } else if (decreasing || arr[i] === arr[i + 1]) {
            return false;
        }
    }
    return decreasing;
}