class Non_Repeating_Char {
    getFreqMap(s:string):Map<string,number>{
        const freqMap = new Map()
        
        for(let i of s){
            if(freqMap.has(i))
            {
                freqMap.set(i,freqMap.get(i) + 1)   
            }
            else{
                freqMap.set(i,1)
            }
        }
        
        return freqMap
    }
    
    nonRepeatingChar(s:string) {
        const sFreqMap = this.getFreqMap(s)
        
        for(let [key,value] of sFreqMap){
            if(value === 1){
                return key
            }
        }
        
        return '$'
        
    }
}