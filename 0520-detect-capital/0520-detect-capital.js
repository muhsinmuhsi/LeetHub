/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let uppercase=word.toUpperCase()
  let lowercase=word.toLowerCase()
  let firstlette=word.slice(0,1)+word.slice(1).toLowerCase()
  
  if(word===uppercase||word===lowercase||word===firstlette){
    return true;
  }else{
    return false;
  }
};