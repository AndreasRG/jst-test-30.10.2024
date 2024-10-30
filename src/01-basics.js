/**
 * This function returns the name of the coolest teacher
 *
 * @returns {string} - The string "Benjamin"
 *
 * Usage:
 * const coolestTeacher = getCoolestTeacher();
 * console.log(coolestTeacher); // Benjamin
 */
function getCoolestTeacher() {
    return 'Benjamin';
}

/**
 * This function multiplies two numbers and then adds a third number.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @returns {number} - The result of (a * b) + c.
 *
 * Usage:
 * const result = multiplyAndAdd(2, 3, 1); // result will be 7
 * const anotherResult = multiplyAndAdd(-1, 1, 2); // anotherResult will be 1
 */
function multiplyAndAdd(a, b, c) {
    const result = a * b + c;
    return result
}

/**
 * This function returns the type of the provided variable.
 *
 * @param {*} value - A variable whose type needs to be determined.
 * @returns {string} - The type of the variable.
 *
 * Usage:
 * const result = determineType("Hello"); // result will be "string"
 * const anotherResult = determineType(42); // anotherResult will be "number"
 */
function determineType(value) {
    const typeControl = typeof value;
    return typeControl;
}

/**
 * This function concatenates two strings with a space in between.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @returns {string} - The concatenated string.
 *
 * Usage:
 * const result = concatenateStringsWithSpace("Hello", "World"); // result will be "Hello World"
 */

function concatenateStringsWithSpace(a, b) {
    return `${a} ${b}`
}


/**
 * This function converts a string to uppercase and adds a smiley at the end of the string
 *
 * @param {string} str - The string to be converted.
 * @returns {string} - The string in uppercase.
 *
 * Usage:
 * const upper = toUpperCaseWithSmiley('hello');
 * console.log(upper); // upper will be 'HELLO:)'
 * const anotherUpper = toUpperCaseWithSmiley('world');
 * console.log(anotherUpper); // upper will be 'WORLD:)'
 */

function toUpperCaseWithSmiley(str) {
    if (str === 'hello' || str === 'world') {
        let upperCaseText = str.toUpperCase();
        return `${upperCaseText}:)`;
    } else {
        let upperCaseText = str.toUpperCase();
        return `${upperCaseText}:)`;
    }
}

/**
 * This function repeats a string a specified number of times with spaces in between.
 *
 * @param {string} str - The string to repeat.
 * @param {number} times - The number of times to repeat the string.
 * @returns {string} - The repeated string with spaces in between.
 *
 * Usage:
 * const repeated = repeatString("Hello", 3); // repeated will be "Hello Hello Hello"
 * const anotherRepeated = repeatString("Goodbye", 2); // anotherRepeated will be "Goodbye Goodbye"
 */
function repeatString(str, times) {
    let stringCoverted = `${str}`;
    if (times == 1) {
        stringCoverted = `${str}`;
    } else if (times > 1)
    for (i = 0; i < times - 1; i++) {
        stringCoverted += ` ${str}`;
        console.log(stringCoverted)
    } else if (times == 0 || times < 0) {
        return "";
    }
    return stringCoverted
}

