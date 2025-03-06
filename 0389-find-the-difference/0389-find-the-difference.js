/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let tArr=t.split('')
  for(let i=0;i<s.length;i++){
    if(t.includes(s[i])){
        let index=tArr.indexOf(s[i])        
        if(index!==-1){
           tArr.splice(index,1)          
        }
    }
  }
  return tArr.join('')
};