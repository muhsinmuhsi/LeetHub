/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var sorted=nums.sort((a,b)=>a-b);
    for(let i=0;i<sorted.length;i++){
        for(let j=i+1;j<=sorted.length;j++){
            if(sorted[i]==sorted[j]){
                sorted.splice(j,1) 
                j--;
            }
        }
    }
    return sorted.length;
};