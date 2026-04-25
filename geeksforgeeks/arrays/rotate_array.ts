class Solution {
    rotate(arr: number[], start: number, end: number): number[] {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }

        return arr
    }

    rotateArr(arr: number[], d: number): void {
        d %= arr.length

        this.rotate(arr, 0, d - 1)
        this.rotate(arr, d, arr.length - 1)
        this.rotate(arr, 0, arr.length - 1)
    }
}
