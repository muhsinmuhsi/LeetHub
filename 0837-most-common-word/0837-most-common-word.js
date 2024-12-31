/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
     let word=paragraph.toLowerCase().split(/\W+/g).filter(letter=>letter)
    const map={}
    for(let x of word){
        if(!map[x]){
            map[x]=1
        }else{
            map[x]++
        }
    }

     return Object.keys(map).sort((a,b)=>{
        return map[b]-map[a]
    }).filter(word=>!banned.includes(word))[0]
};