/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let R=0
    let L=0
    let result=0
    for(let i=0;i<s.length;i++){
        if(s[i]==="R"){
            R++
        }else if(s[i]==='L'){
            L++
        }
        if(R===L){
            result++
        }
    }
   return result
};