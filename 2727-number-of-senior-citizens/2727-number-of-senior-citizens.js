/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
     let count=0;
  for(let word of details){
     if(word[word.length-4]+word[word.length-3]>60){
          count++
        }   
  }
  return count
};