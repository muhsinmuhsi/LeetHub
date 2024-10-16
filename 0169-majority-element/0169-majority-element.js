/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let f={}
  for(let i=0;i<nums.length;i++){
      if(f[nums[i]]==undefined){
        f[nums[i]]=1
      }else{
        f[nums[i]]+=1
      }
      if(f[nums[i]]>nums.length/2){
        return nums[i]
      }
    }
};