/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let num=n.toString()
    let sum=0
    let product=1
    for(let x of num){
       sum+=Number(x) 
       product *= Number(x)
    }
   return product-sum
};