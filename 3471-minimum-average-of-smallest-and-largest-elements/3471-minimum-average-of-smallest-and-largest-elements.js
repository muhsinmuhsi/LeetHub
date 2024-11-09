/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
     nums.sort((a,b)=>a-b)
  let n=nums.length;
  let minavg=nums[0]+nums[n-1]/2
  console.log(minavg);
  for(let i=0;i<n/2;i++){
   let avg=(nums[i]+nums[n-1-i]) /2
   if(avg<minavg){
      minavg=avg
   }
  }
   return minavg
};