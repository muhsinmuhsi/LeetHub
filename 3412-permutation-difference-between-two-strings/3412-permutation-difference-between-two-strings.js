/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let letIndexes=[]
    for(let i=0;i<s.length;i++){
        let sOfIndex=s.indexOf(s[i])
        let tOfIndex=t.indexOf(s[i])
        
        if(sOfIndex!==tOfIndex){
            letIndexes.push(sOfIndex-tOfIndex)
            
        }
    }
    let positiveindexes=letIndexes.map(num=>Math.abs(num));
    return positiveindexes.reduce((accumulator,value)=>accumulator+=value,0)
};