class Solution {
    
    removeTailingZeros(s:string){
        return s.slice(s.indexOf('1'))
    }
    
    addBinary(s1:string, s2:string):string {
        
        s1 = this.removeTailingZeros(s1)
        s2 = this.removeTailingZeros(s2)
        
        let finalNumber:string = ''
        
        let i:number = s1.length - 1
        let j:number = s2.length - 1
        
        let sum:number = 0
        let carry:number = 0
        
        while(i >= 0 || j >= 0 || carry > 0){
            
            let a = i >= 0 ? Number(s1[i]) : 0
            let b = j >= 0 ? Number(s2[j]) : 0
            
            sum = a + b + carry
            
            carry = Math.floor(sum / 2)
            finalNumber += sum % 2
            
            i--
            j--
        }
        
        return finalNumber.split('').reverse().join('')
    }
}