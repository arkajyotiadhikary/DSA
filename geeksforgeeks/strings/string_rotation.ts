class String_Rotation {
    areRotations(s1:string, s2:string) {
        if(s1.length !== s2.length){
            return false
        }
        
        const boubleds1 = s1 + s1
        
        if(boubleds1.includes(s2))
        {
            return true
        }
        
        
        return false
    }
}