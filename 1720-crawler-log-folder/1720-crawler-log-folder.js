/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let changes=[]
    for(let x of logs){
        if(x==='../'){
            changes.pop()
        }else if(x!=='./'){
            changes.push(x)
        }
    }
    return changes.length
};