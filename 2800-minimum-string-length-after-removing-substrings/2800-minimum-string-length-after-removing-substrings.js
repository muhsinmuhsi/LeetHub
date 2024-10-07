/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    for(word of s){
    s=s.replace("AB","")
    s=s.replace("CD","")
  }
  return s.length;
};