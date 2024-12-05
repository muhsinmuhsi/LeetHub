/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let x=s.split('').sort().join('')
    let l=t.split('').sort().join('')
    if(x===l){
        return true
    }else{
        return false
    }
};