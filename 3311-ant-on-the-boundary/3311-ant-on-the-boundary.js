/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
  let count=0;
  let numbers=0;
  for(let i=0;i<nums.length;i++){
     numbers+=nums[i]
     if(numbers==0){
        count++;
     }
  }

    return  count;
};