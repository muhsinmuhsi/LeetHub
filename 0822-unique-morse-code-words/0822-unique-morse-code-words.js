/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morseletter = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-",
        ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let ans={}
    for (let word of words) {
        let transform=''
        
        for(let i=0;i<word.length;i++){
            let index = alphabet.indexOf(word[i].toLowerCase())
            transform+=morseletter[index]
        }
        if(ans[transform]){
            ans[transform]++
        }else{
            ans[transform]=1
        }
    }
    return Object.keys(ans).length
};