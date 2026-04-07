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
    // we could process the number as we go, so it can have complexity of o(N)

    let output = 0 // result so far
    let curr = 0 // helper to process digit // e.g [123], 123
    let stack = [] // process task before parentheses close
    let signMultiplier = 1 // keep on track current sign we working on // 1-(1+1) or 1+(1-1)

    for (let c of s) {
        // digit

        // 123+3
        //   ^
        if (/\d/.test(c)) {
            curr = (curr * 10) + Number(c)
        } else if (/\+|-/.test(c)) {
            output = output + (curr * signMultiplier)
            curr = 0 // reset, job done

            if (c === "+") {
                signMultiplier = 1 // prepare sign for next token
            } else {
                signMultiplier = -1
            }
        } else if (c === "(") {
            // we have progress so far.
            stack.push(output)
            stack.push(signMultiplier)

            // resets the context so the code inside the brackets behaves like a brand-new expression.
            output = 0 // reset
            signMultiplier = 1 // reset

            // no need reset current cos + - already handle it, ( will be always followed by + or - in valid case
        } else if (c === ")") {
            // process numbers inside
            output = output + (curr * signMultiplier)

            curr = 0 // reset curr

            output *= stack.pop() // process sign before the parentheses
            output += stack.pop() // process output result before parentheses

        }
        // whitespaces etc, ignore case
    }

    // Handle the final number in the string.
    // Since the loop only adds curr to output when it encounters an operator or a closing parenthesis, 
    // the very last number parsed needs to be manually added to the result."
    const lastDigit = curr * signMultiplier
    return output + lastDigit


    // complexity (o(n))

    // memory O(N) , cos it will never more than the characters

    // hint to memorize
    // - curr will always multiply with signMultiplier before added to output
    // - curr will always reset when concluded, when +- is met, or ) is met
    // pay attention to push order, push the number then sign, later pop sign then number
};

export { calculate };
