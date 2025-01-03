/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
     let Replaced=[]
    for(let x of nums){
        let stringnumber=x.toString().split('')
        let sum = stringnumber.reduce((acc,number)=>acc+parseInt(number),0)
        Replaced.push(sum)
        
    }
    return Math.min(...Replaced)
};