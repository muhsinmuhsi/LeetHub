/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let word of nums){
    if(word==0){
        let index=nums.indexOf(word)
        if(index!==-1){
        nums.splice(index,1)
        nums.push(0)

        }
    }
}
};