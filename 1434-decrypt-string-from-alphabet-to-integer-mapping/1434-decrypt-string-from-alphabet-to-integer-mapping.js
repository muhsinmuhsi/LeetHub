/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const firstLetters=['*','a','b','c','d','e','f','g','h','i'];
    const secondLetters={"10#":'j',"11#":'k',"12#":'l',"13#":'m',"14#":'n',"15#":'o',"16#":'p',"17#":'q',"18#":'r',"19#":'s',"20#":'t',"21#":'u',"22#":'v',"23#":'w',"24#":'x',"25#":'y',"26#":'z'};
    let answer=[]
    
for (let i=0;i<s.length;i++){
    if(s[i+2]!=="#"&& s[i]!=='#' && s[i+1]!=='#'){
        answer.push(firstLetters[s[i]])
        
    }else{
        let str=s.slice(i,i+3)
        if(secondLetters[str]){
            answer.push(secondLetters[str])
        }
        
    }
}
return answer.join('')
};