/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    for(let i=0;i<nums.length;i++){
      if(nums.includes(original)){
        original=original*2
      }else{
        return original
      }
      
   }
   return original
};