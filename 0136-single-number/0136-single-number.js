/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort()
 if(nums.length===1)return nums[0];
 for(let i=0;i<nums.length;i+=2){
   if(i==nums.length){
    return nums[nums.length-1]
   }
   if(nums[i]!=nums[i+1]){
    return nums[i]
   }
   
 }
  

};