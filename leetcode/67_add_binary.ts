function removeTailingZeros(s:string):string{    
    return s.slice(s.indexOf('1'))
}

function addBinary(a: string, b: string): string {
    let finalNumber = ''
    let carry = 0
    let sum = 0
    
    a = removeTailingZeros(a)
    b = removeTailingZeros(b)

    let i = a?.length - 1
    let j = b?.length - 1

    
    while(i >= 0 || j >= 0 || carry > 0)
    {
        const x = i >= 0 ? Number(a[i]) : 0
        const y = j >= 0 ? Number(b[j]) : 0

        sum = x + y + carry
        carry = Math.floor(sum/2)

        finalNumber += sum % 2

        i--
        j--
    }

    return finalNumber.split('').reverse().join('')
};