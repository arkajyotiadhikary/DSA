class MoveAllZerosToEnd {
    pushZerosToEnd(arr:number[]) {
        let p1 = 0
        let p2 = 0
        
        while(p2 <= arr.length - 1)
        {
            if(arr[p2] !== 0)
            {
                [arr[p1], arr[p2]] = [arr[p2], arr[p1]]
                p1++
                p2++
            }
            else
            {
                p2++
            }
        }
        
    }
}