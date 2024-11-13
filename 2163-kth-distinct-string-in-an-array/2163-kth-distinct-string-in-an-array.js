/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
     let ans=[]
   for(let i=0;i<arr.length;i++){
     const temparr=[...arr]
     temparr.splice(i,1)
     if(!temparr.includes(arr[i])){
       ans.push(arr[i])
     }
   }
   return ans[k-1]?ans[k-1]:''
};