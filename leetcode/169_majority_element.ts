function majorityElement(nums: number[]): number {
    const freqMap = new Map()

    for (let i of nums) {
        if (freqMap.has(i)) {
            freqMap.set(i, freqMap.get(i) + 1)
        } else {
            freqMap.set(i, 1)
        }
    }

    for (let [key, value] of freqMap) {
        if (value > nums.length / 2)
            return key
    }

    return 0
};
