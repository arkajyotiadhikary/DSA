module.exports = {
    //param A : array of integers
    //return an integer
    maxSubArray: function (A: number[]): number {
        let currentSum = A[0]
        let maxSum = A[0]

        for (let i = 1; i < A.length; i++) {
            currentSum = Math.max(A[i], currentSum + A[i])
            maxSum = Math.max(maxSum, currentSum)
        }

        return maxSum
    }
};
