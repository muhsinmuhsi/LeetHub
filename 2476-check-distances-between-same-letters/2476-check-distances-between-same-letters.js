/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const firstOccurance={}
    for(let i=0;i<s.length;i++){
        let char=s[i]
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0); // Get index in the distance array

        if(char in firstOccurance){
            if(i-firstOccurance[char]-1 !== distance[index]){
                return false
        }
    }else{
        firstOccurance[char]=i
    }
}
return true
};