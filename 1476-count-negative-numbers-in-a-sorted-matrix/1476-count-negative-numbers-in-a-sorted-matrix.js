/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count=0;
   for(let word of grid){
     for(let j=0;j<word.length;j++){
        if(word[j]<0){
            count++;
        }
     }
   }
   return count;
};