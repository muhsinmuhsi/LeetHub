/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let firstrow='qwertyuiop'
    let secondrow="asdfghjkl"
    let therdrow="zxcvbnm"
    let result=[]
    for(let word of words){
       let lowercase=word.toLowerCase()
        if (firstrow.indexOf(lowercase[0])!==-1){
            let found=true;
            for(let i=0;i<lowercase.length;i++){
                if(firstrow.indexOf(lowercase[i])===-1){
                  found=false;
                  break;
                }
            }
            if(found){
                result.push(word)
            }
        }
        
        if (secondrow.indexOf(lowercase[0])!==-1){
            let found=true;
            for(let i=0;i<lowercase.length;i++){
                if(secondrow.indexOf(lowercase[i])===-1){
                  found=false;
                  break;
                }
            }
            if(found){
                result.push(word)
            }
        }

        if (therdrow.indexOf(lowercase[0])!==-1){
            let found=true;
            for(let i=0;i<lowercase.length;i++){
                if(therdrow.indexOf(lowercase[i])===-1){
                  found=false;
                  break;
                }
            }
            if(found){
                result.push(word)
            }
        }
    }
    return result;
};