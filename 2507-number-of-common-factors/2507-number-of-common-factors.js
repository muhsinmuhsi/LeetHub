/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let answer=[]
  for(let i=1;i<=b;i++){
    if(a%i===0 && b%i===0){
        answer.push(i)
    }
  }
  return answer.length;
};