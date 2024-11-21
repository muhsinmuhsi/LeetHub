/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
     let arr=''
    let sorted=[...indices]
    sorted=sorted.sort((a,b)=>a-b)
 for(let i=0;i<indices.length;i++){
    let index=indices.indexOf(sorted[i])
    arr+=s[index]
 }
 return arr
};