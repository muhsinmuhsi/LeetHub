/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
     let count=0;
 for(let i=0;i<words.length;i++){
  for(let j=i+1;j<words.length;j++){
    let revers=words[i].split('').reverse().join('')
    if(revers===words[j]){
      count++;
    }
  }
 } 

 return count
};