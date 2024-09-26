/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
   if(num<=1){
        return false
    }
        let divisers = []
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            divisers.push(i)
        }
    }

    const isperect = divisers.reduce((total, currentvalue) => total + currentvalue)
    return isperect === num
  
}
