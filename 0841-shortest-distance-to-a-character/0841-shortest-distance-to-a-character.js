/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const answer=[]
    const index=[]
    for(let i=0;i<s.length;i++){
        if(s[i]===c){
            index.push(i)
        }
    }

    for(let i=0;i<s.length;i++){
        let t=s.length;
        for(let x of index) t=Math.min(Math.abs(i-x),t)
            answer.push(t)
    }

    return answer
};