function removeDuplicates2(nums: number[]): number {
    let p1 = 0

    for(let p2 = 0; p2 < nums.length; p2++){
        if(p1 < 2 || nums[p2] !== nums[p1 - 2])
        {
            nums[p1] = nums[p2]
            p1++
        }
    }

    return p1
};