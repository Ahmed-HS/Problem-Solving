/**
    Easy
    https://leetcode.com/problems/duplicate-zeros/
*/
function duplicateZeros(arr: number[]): void {
    let zerosDuplicated = new Array<number>(arr.length);
    let resultIndex = 0;
    for (let index of arr.keys()) {
        zerosDuplicated[resultIndex] = arr[index];
        if (arr[index] === 0) {
            resultIndex++;
            zerosDuplicated[resultIndex] = 0;
        }
        arr[index] = zerosDuplicated[index];
        resultIndex++;
    }
};