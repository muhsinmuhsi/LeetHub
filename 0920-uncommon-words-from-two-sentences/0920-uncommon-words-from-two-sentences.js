/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
   s1=s1.split(' ')
  s2=s2.split(' ')
  let set= new Set()
  let dupli=new Set()

  for (let word of s1){
    if(!dupli.has(word)){
      if(set.has(word)){
        set.delete(word)
        dupli.add(word)
      }else{
        set.add(word)
      }
    }
  }

  for(let word of s2){
    if(!dupli.has(word)){
      if(set.has(word)){
        set.delete(word)
        dupli.add(word)
      }else{
        set.add(word)
      }
    }
  }
  return Array.from(set)
};