/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  a =0 
  b =1
  for(i=0;i<n;i++){
    [a,b] = [b,a+b]
  }
  return b

};