/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
    let letters=['a','b','c','d','e','f','g','h']

    let index1=letters.indexOf(coordinate1[0])
  let row1 = parseInt(coordinate1[1])

  let index2=letters.indexOf(coordinate2[0])
  let row2=parseInt(coordinate2[1])

  let color1=(index1 + row1)%2;
  let color2=(index2 + row2 )%2;

  return color1==color2
};