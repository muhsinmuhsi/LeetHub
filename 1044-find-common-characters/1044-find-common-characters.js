/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    if(words.length<=1) return words[0].split('')
     for (let i = 0; i < words.length; i++){
    words[i] = words[i].split('')
}
  let answer=[]
 for(let i=0;i<words[0].length;i++){
  let flag=false;
  for(let j=1;j<words.length;j++){
    if(words[j].includes(words[0][i])) flag=true
    else{
      flag=false
      break;
    }
  }  
     if(flag){
      for(let j=1;j<words.length;j++){
        let index=words[j].indexOf(words[0][i])
         words[j][index]=""
      }
      answer.push(words[0][i])
     }
  }
  return answer
};