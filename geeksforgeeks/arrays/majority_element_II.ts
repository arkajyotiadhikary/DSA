// Problem link - https://www.geeksforgeeks.org/problems/majority-vote/1

class Solution {
    findMajority(arr: number[]): number[] {
        const freqMap = new Map<number, number>()
        const result: number[] = []

        for (const i of arr) {
            freqMap.set(i, (freqMap.get(i) ?? 0) + 1)
        }

        for (const [key, value] of freqMap) {
            if (value > Math.floor(arr.length / 3)) {
                result.push(key)
            }
        }

        return result.sort((a, b) => a - b)
    }
}
