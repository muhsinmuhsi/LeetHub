/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let replace= s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
 
 if(replace.split('').reverse().join('')===replace){
    return true
 }else{
    return false
 }
};