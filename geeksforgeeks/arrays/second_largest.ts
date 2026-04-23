class Solution {
    getSecondLargest(arr: number[]): number {
        let largest = arr[0]
        let secondLargest = -1
        
        for(let i of arr)
        {
            if(i > largest)
            {
                secondLargest = largest
                largest = i
            }
            else if(i > secondLargest && i < largest)
            {
                secondLargest = i
            }
        }
        
        return secondLargest
        
    }
}