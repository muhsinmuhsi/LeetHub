/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack=[]
    for(let i of s){
        stack[stack.length-1]===i ? stack.pop() : stack.push(i)
    }
    return stack.join('')
};