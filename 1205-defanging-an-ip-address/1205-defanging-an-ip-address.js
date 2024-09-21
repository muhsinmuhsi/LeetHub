/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
     address=address.split('')
 for(let i=0;i<=address.length-1;i++){
    if(address[i]==='.'){
        address[i]='[.]'
        
    }
 }
 let answer=address.join('')
 return answer
};