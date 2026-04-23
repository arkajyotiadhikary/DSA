function sockMerchant(_n: number, ar: number[]): number {
    const socksFreqMap = new Map()
    let pairs = 0
    
    for(let i of ar)
    {
        if(socksFreqMap.has(i))
        {
            socksFreqMap.set(i,socksFreqMap.get(i) + 1)
        }
        else
        {
            socksFreqMap.set(i, 1)
        }
    }
    

    for(let [_, value] of socksFreqMap){
            pairs += Math.floor(value/2)
    }
        
    return pairs
}