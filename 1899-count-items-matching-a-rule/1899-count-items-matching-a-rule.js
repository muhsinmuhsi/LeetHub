/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
     let count=0;
   for(let x of items){
       switch (ruleKey) {
        case "type":
            if(x[0]===ruleValue){
                count++;
            }
            break;

        case "color":
            if(x[1]===ruleValue){
                count++;
            }
            break;

        case "name":
            if(x[2]===ruleValue){
                count++;
            }
            break;
       
        default:
            break;
       }
    
   }

   return count;
};