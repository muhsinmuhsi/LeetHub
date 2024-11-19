/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let maximamvalue
  if(isNaN(strs[0])){
    maximamvalue=strs[0].length;
  }else{
    maximamvalue=Number(strs[0]);
  }

  for(let x of strs){
    if(isNaN(x)){
        if(x.length>maximamvalue){
            maximamvalue=x.length
        }
    }else{
        if(Number(x)>maximamvalue){
            maximamvalue=Number(x);
        }
    }
  }
  return maximamvalue
};