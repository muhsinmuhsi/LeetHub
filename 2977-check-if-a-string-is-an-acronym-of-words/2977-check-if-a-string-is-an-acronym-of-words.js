/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
      let flag=false
  if(words.length===s.length){
   for(let i=0;i<words.length;i++){
     if(words[i][0]===s[i]){
       flag=true
     }else{
       return false
     }
   }
   if(flag===true){
     return true
   }else{
     return false
   }
    
  }else{
    return false
  }
};