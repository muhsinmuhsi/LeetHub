/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
     for(let i=0;i<words.length;i++){
    let revers=words[i].split('').reverse().join('')
        if(words[i]===revers){
            
          return words[i]
        }
  }
  return ""
};