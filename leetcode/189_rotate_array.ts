// Problem link - https://leetcode.com/problems/rotate-array/

function rotateBySteps(nums: number[], start: number, end: number): number[] {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
    return nums
}

function rotate(nums: number[], k: number): void {
    k %= nums.length
    const pivot = nums.length - k

    rotateBySteps(nums, 0, pivot - 1)
    rotateBySteps(nums, pivot, nums.length - 1)
    rotateBySteps(nums, 0, nums.length - 1)
}
