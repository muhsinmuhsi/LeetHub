/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let answer=[]
    for(let x of nums1){
        if(nums2.includes(x)){
            if(!answer.includes(x)){
                answer.push(x)
            }
        }
    }
    return answer
};