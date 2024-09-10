/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
      const splited=s.trim().split(' ')
     let word=[]
     if(splited[splited.length-1]!=' '){
         word=(splited[splited.length-1])
     }
    
    return word.length
};