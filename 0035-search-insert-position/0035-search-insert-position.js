/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
const index=nums.indexOf(target)
  let end =nums[nums.length-1];
  if(index===-1){
      for(let i=0;i<nums.length;i++){
        if(nums[i]+1===target){
            return i+1;
        }else if(target<nums[i]){
            return i;
        }else if(target>end){
            return nums.indexOf(end)+1;
        }
      }
  }
  return index;
};