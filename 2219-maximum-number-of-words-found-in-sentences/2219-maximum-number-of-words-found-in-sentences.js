/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maximum=sentences[0].split(' ').length
for(let x=0;x<sentences.length;x++){
    if(sentences[x].split(' ').length>maximum){
        maximum=sentences[x].split(' ').length
    }
}
return maximum
};