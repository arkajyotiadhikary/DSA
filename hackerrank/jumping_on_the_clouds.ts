function jumpingOnClouds(c: number[]): number {
    let p = 0;
    let jumpCount = 0;
    let n = c.length

    while (p < n - 1) {
        if (p + 2 < n && c[p + 2] !== 1) {
            p += 2
        }
        else {
            p += 1
        }

        jumpCount++
    }

    return jumpCount
}
