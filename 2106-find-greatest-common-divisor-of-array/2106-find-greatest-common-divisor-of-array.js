/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
  nums=nums.sort((a,b)=>a-b)
  let answer=[]
  let big=nums[nums.length-1]
  let small=nums[0]
  for(let i=0;i<=big;i++){
    if(big%i===0&&small%i===0){
       answer.push(i)
    }
  }
  answer=answer.sort((a,b)=>b-a)
  return answer[0]
};