/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
     let ans={}
    for(let i of strs){
      let key=i.split('').sort().join('')
      if(!ans[key]){
        ans[key]=[]
      }
      ans[key].push(i)
    }
    return Object.values(ans)
};