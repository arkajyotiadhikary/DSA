module.exports = {
 //param A : array of array of integers
 //return a array of integers
    spiralOrder : function(A){
        let result = []

        if(A.length === 0) return result

        let top = 0
        let bottom = A.length - 1
        let left = 0
        let right = A[0].length - 1

        while(top <= bottom && left <= right)
        {
            for(let j = left; j <= right; j++) result.push(A[top][j])
            top++

            for(let i = top; i <= bottom ; i++) result.push(A[i][right])
            right--

            if(top <= bottom)
            {
                for(let j = right; j >= left; j--) result.push(A[bottom][j])
                bottom--
            }
            if(left <= right)
            {
                for(let i = bottom; i >= top; i--) result.push(A[i][left])
                left++
            }
        }

        return result
    }
};
