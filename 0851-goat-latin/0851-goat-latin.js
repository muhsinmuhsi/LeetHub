/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const vowels=['a', 'e', 'i', 'o','u']
   sentence=sentence.split(' ')
   for(let i=0;i<sentence.length;i++){
    let fWord=sentence[i]
    
     if(vowels.includes(fWord[0].toLowerCase())){
        sentence[i]=sentence[i]+"ma"
     }else{
        let notVowel=sentence[i].split('')
        notVowel.shift()
        notVowel.join('')
        notVowel.push(fWord[0])
        sentence[i]=notVowel.join('')+"ma"
        
     }
     for(let j=0;j<i+1;j++){
        sentence[i]=sentence[i]+'a'        
     }
   }
   return sentence.join(' ')
};