/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
   let words=s.split(' ')
  let charStack=new Map();
  let wordStack= new Map();
  if(pattern.length !== words.length) return false;
  for(let i=0;i<pattern.length;i++){
     let c=pattern[i]
     let w=words[i]
     if(charStack.has(c) && charStack.get(c) !== w) return false;
     if(wordStack.has(w) && wordStack.get(w) !== c) return false;
     charStack.set(c, w)
     wordStack.set(w, c)
  }

  return true;
};