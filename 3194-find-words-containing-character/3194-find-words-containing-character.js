/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
     let answer=[]
  for(let i=0;i<words.length;i++){
    if(words[i].indexOf(x)!==-1){
     answer.push(i) 
    }
  }
  return answer
};