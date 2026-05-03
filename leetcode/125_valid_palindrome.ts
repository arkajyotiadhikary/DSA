// Problem link - https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")

    let p1 = 0
    let p2 = s.length - 1

    while (p1 < p2) {
        if (s[p1] !== s[p2]) {
            return false
        }

        p1++
        p2--
    }

    return true
}
