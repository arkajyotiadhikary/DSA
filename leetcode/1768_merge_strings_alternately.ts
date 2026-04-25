// Problem link - https://leetcode.com/problems/merge-strings-alternately/

function mergeAlternately(word1: string, word2: string): string {
    let p = 0
    const fn = []

    while(p < word1.length && p < word2.length){
        fn.push(word1[p],word2[p])
        p++
    }

    if(p < word1.length)
    {
        fn.push(word1.slice(p))
    }
    else if(p < word2.length)
    {
        fn.push(word2.slice(p))
    }

    return fn.join('')
};
