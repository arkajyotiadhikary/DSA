function removeDuplicates(nums: number[]): number {
    let p1 = 0
    let p2 = 1

    while(p2 <= nums.length - 1)
    {
        if(nums[p1] !== nums[p2])
        {
            nums[p1 + 1] = nums[p2]
            p1++
            p2++
        }
        else{
            p2++
        }
    }

    return p1 + 1
};
