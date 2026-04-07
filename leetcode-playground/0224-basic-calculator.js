/**
 * Given a string s representing a valid expression, implement a basic calculator
 * to evaluate it, and return the result of the evaluation.
 *
 * https://leetcode.com/problems/basic-calculator/description/
 *
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    // implement

    let curr = 0
    let output = 0
    let stack = []
    let sign = 1

    for (let c of s) {
        // digits
        if (/\d/.test(c)) {
            // 2
            // shift existing number in case its other digits
            curr = (curr * 10) + Number(c)
            // 💡 You do not add curr to the output immediately because you don't know if the number is finished yet.
        } else if (/\+|-/.test(c)) {
            // Add the completed number to the running total.
            output = output + (curr * sign)
            curr = 0 // reset

            // process the sign for next number
            if (c === "+") {
                sign = 1
            } else {
                sign = -1
            }
        } else if (c === "(") {
            // we want to remember previous number and sign to be processed later
            stack.push(output) // pushing completed work from previous
            stack.push(sign) // cater last work's sign

            // prepare for next token inner parentheses
            output = 0
            sign = 1
        } else if (c === ")") { // important to make this elseif, cos we possibly have whitespace
            // conclude the items in parentheses
            output = output + (curr * sign)
            curr = 0 // reset current for next

            // process the stack (previous result before parentheses)
            output *= stack.pop() // process sign
            output += stack.pop() // process number
        }
    }

    // [1+ 1] so far we only perform output calculation when meeting sign or parentheses
    // last digit is never touched, so handle it here

    const lastDigit = curr * sign
    return output + lastDigit
};

export { calculate };
