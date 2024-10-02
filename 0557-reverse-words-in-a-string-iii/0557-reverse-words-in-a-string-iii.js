/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
     s=s.split(' ')
  let reversed=[]
  for(let word of s){
    word=word.split('').reverse().join('')
    reversed.push(word)
    
  }
  return reversed.join(' ')
};