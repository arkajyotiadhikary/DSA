function getFreqMap(s:string):Map<string,number>{
    const freqMap = new Map()

    for(let i of s){
        if(freqMap.has(i))
        {
            freqMap.set(i,freqMap.get(i)+1)
        }
        else
        {
            freqMap.set(i,1)
        }
    }

    return freqMap;
}

function isAnagram(s: string, t: string): boolean {

    if(s.length !== t.length) return false

    const sFreqMap = getFreqMap(s)

    for(let i of t){

        const count = sFreqMap.get(i) ?? 0

        if(sFreqMap.has(i) && count > 0){
            sFreqMap.set(i,count - 1)
        }else{
            return false
        }
    }


    return true

};