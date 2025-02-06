/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let result=[]
    let letters=[]

    for(let i=0;i<s.length;i++){
        if(/[a-zA-Z]/.test(s[i])){
           letters.push(s[i])
        }
    }

    let reversed=letters.reverse()

    for (let i=0;i<s.length;i++){
        if(/[a-zA-Z]/.test(s[i])){
            result.push(reversed[0])
            reversed.shift()
        }else{
            result.push(s[i])
        }
    }

    return result.join('')
};