/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let xstring=x.toString()
   let sum=0
   for (let i of xstring){
     sum+=Number(i)
   }
   if(x%sum===0){
    return sum; 
   }else{
    return -1;
   }
   
};