/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
     var num;
    let answer
    if(num<2){
        return true
    }
    for (var i = 0 ; i<=num/2; i++) {
        if (i * i === num) {
           answer=i
           break;
       }
   }
   
   if(answer){
    return true
   }else{
    return false
   }

};
