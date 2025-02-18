/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 function backSpacestring(str){
  let stack=[]
   for(char of str){
    if(char==="#"){
      stack.pop()
    }else{
      stack.push(char)
    }
   }
   return stack.join('')
  
}

var backspaceCompare = function(s, t) {
    return backSpacestring(s)===backSpacestring(t)
};