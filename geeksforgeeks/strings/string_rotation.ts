class String_Rotation {
    areRotations(s1:string, s2:string):bool {
        if(s2.length > s1.length)
            return false
        
        const doubled = s1 + s1

        return doubled.includes(s2)
        
    }
}
