/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits; // Return the array if no carry is needed
        }
        digits[i] = 0; // Set current digit to 0 and continue if a carry is needed
    }
    
    // If all digits were 9, we need to add a leading 1
    digits.unshift(1);
    return digits;
};