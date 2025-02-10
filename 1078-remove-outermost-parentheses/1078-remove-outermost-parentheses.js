/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result=''
  let count=0
 for(i of s){
  if(i==='('){
    if(count) result+=i;
    count++;
  }else{
    count--;
    if(count) result+=i
  }
 }  
  
  return result
};