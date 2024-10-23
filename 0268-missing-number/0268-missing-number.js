/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
     let sort=nums.sort((a,b)=>a-b)
   for(let i=0;i<=sort.length;i++){
       if(sort[i]!==i){
        return i
       }
   }
};