function removeElement(nums: number[], val: number): number {
    let p1 = 0 
    let p2 = nums.length - 1
    let k = 0

    while(p2 >= p1){
        if(nums[p1] === val)
        {
            [nums[p1], nums[p2]] = [nums[p2],nums[p1]]
            p2--
            k++
        }
        else
        {
            p1++
        }

    }

    return nums.length - k
};
