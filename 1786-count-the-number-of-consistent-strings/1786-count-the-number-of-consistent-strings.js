/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count=0;
 for(let x of words){
    let flag=true
    for(let y of x){
        if(!allowed.includes(y)){
            flag=false
         }
 }
 if(flag===true){
    count++
 }
}
return count
};