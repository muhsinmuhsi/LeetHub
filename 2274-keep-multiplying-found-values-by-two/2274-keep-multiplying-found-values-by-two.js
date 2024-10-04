/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    for(let num of nums){
      if(nums.includes(original)){
        original=original*2
      }
      
   }
   return original
};