/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    const ASCII=[]
    let plus=0
    for(let i=0;i<s.length;i++){
        let code=s[i].charCodeAt(0)
        ASCII.push(code)
    }

    for(let i=0;i<ASCII.length;i++){
      if(i!==ASCII.length-1){
         plus+=Math.abs(ASCII[i]-ASCII[i+1])
      }
    }

 
 return plus 
};