/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
     s=s.split(' ')
    let answer=[]
  for(let i=0;i<k;i++){
     answer.push(s[i])
  }
  answer=answer.join(' ')
  return answer;
};