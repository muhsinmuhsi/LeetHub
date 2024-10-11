/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let index=[]
   for(let i=0;i<nums.length;i++){
      if(nums[i]===target){
        index.push(i)
      }
   }
   if(index.length>0){
    return index[0];
   }else{
    return -1;
   }
};