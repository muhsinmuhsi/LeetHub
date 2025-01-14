/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split('').sort().join('');
    magazine = magazine.split('').sort().join('');
    
    let idx = 0;
    for (let i = 0; i < magazine.length; i++) {
        if (ransomNote[idx] === magazine[i]) {
            idx++;
        }
    }
    
    return idx === ransomNote.length;
};