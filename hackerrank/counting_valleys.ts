function countingValleys(steps: number, path: string): number {
    let seaLevel = 0
    let isCountingVally = false
    let vallies = 0

    for (let i of path) {
        if (i === 'D') {
            seaLevel--
            if (seaLevel < 0 && !isCountingVally) {
                isCountingVally = true
            }
        } else {
            seaLevel++
            if (seaLevel >= 0 && isCountingVally) {
                vallies++
                isCountingVally = false
            }
        }
    }

    return vallies
}
