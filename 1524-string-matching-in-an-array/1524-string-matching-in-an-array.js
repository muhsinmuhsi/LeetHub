/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let included=[]

 for(let i=0;i<words.length;i++){
    for(let j=0;j<words.length;j++){
        if(i!==j){
            if(words[i].includes(words[j])){
                if(!included.includes(words[j])){
                    included.push(words[j])
                }
            }
        }
    }
 }
  return included
};