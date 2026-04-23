// Problem link  - https://www.geeksforgeeks.org/batch/gfg-160-problems/track/string-gfg-160/problem/check-if-strings-are-rotations-of-each-other-or-not-1587115620

class String_Rotation {
    areRotations(s1:string, s2:string):bool {
        if(s2.length > s1.length)
            return false
        const doubled = s1 + s1

        return doubled.includes(s2)
        
    }
}
