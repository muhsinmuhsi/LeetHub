/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    const evens=nums.filter((item)=>item%2==0&&item%3==0)
   if(evens.length!==0){
    let avarege=0;
    let length=evens.length;
    for(let i=0;i<length;i++){
       avarege+=evens[i];
    }
   return Math.floor(avarege/length);
   }else{
    return 0;
   }
};