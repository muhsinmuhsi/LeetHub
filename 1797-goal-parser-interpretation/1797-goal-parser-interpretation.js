/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let answer=''
  for (var i = 0; i < command.length; i++) {
     if (command[i]==='G') {
       answer+='G'
     }else if(command[i]==='('&&command[i+1]===')'){
       answer+='o'
     }else if(command[i]==='('&&command[i+1]==="a"){
       answer+='al'
     }
  }
  return answer;
};