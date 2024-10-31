/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    date=date.split('-')
  let answer=[]
  for(let i=0;i<date.length;i++){
    answer.push(parseInt(date[i]).toString(2))
  }
  return answer.join('-')

};