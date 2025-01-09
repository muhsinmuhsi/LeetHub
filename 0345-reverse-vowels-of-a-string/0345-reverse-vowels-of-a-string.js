/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels=['a', 'e', 'i', 'o','u']
    let answer=[]
    let vowelsarr=[]
    for(let i=0;i<s.length;i++){
        let word=s[i].toLowerCase()
        if(vowels.includes(word)){
            vowelsarr.push(s[i])
        }
    }
    vowelsarr.reverse()

    for(let i=0;i<s.length;i++){
        let word=s[i].toLowerCase()
        if(vowels.includes(word)){
            answer.push(vowelsarr[0])
            vowelsarr.shift()
        }else{
            answer.push(s[i])
        }

    }
    return answer.join('')

};