/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let vowel= new Set(['a', 'e', 'i', 'o','u'])
    let count=0;
    for(let i=left;i<=right;i++){
     if(vowel.has(words[i][0]) && vowel.has(words[i].at(-1))){
        count++
      }
    }
    return count;
};