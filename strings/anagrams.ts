class Anagrams {
    
    getFreqMap(s: string): Map<string, number> {
        const hashMap = new Map<string, number>()
        
        for (let i of s) {
            hashMap.set(i, (hashMap.get(i) ?? 0) + 1)
        }
        
        return hashMap
    }
    
    areAnagrams(s1: string, s2: string): boolean {
        
        if (s1.length !== s2.length) {
            return false
        }

        const s1HashMap = this.getFreqMap(s1)
        
        for (let i of s2) {
            const count = s1HashMap.get(i) ?? 0
            if (count > 0) {
                s1HashMap.set(i, count - 1)
            } else {
                return false
            }
        }
        
        return true
    }
}