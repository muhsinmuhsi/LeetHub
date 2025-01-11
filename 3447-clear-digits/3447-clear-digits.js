/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let result=[]
   for (let char of s){
    if(char>='0'&&char<='9'){
        if(result.length>=0&& result[result.length-1]>='a'&&result[result.length-1]<='z'){
            result.pop()
        }
    }else{
        result.push(char)
    }
   }
   return result.join('')

};