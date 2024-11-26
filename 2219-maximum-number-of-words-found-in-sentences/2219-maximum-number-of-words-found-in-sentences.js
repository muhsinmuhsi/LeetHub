/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maximum=sentences[0].split(' ').length
for(let x of sentences){
    if(x.split(' ').length>maximum){
        maximum=x.split(' ').length
    }
}
return maximum
};