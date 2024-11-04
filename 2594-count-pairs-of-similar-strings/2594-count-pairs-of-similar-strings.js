/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
     let count=0
 let uniqueCaracters=words.map(word=>{
    return [...new Set(word)].sort().join('')
 })
  
 for(let i=0;i<uniqueCaracters.length;i++){
    for(let j=i+1;j<uniqueCaracters.length;j++){
        if(uniqueCaracters[i]===uniqueCaracters[j]){
            count++
        }
    }
 }
  
 return count
};