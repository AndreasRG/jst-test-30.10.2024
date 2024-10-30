/**
 * This function generates a birthday message based on the user's name and age.
 *
 * @param {string} name - Name of the user.
 * @param {number} age - Age of the user.
 * @returns {string} - Message for the user in this format: Hey NAME, happy YEAR birthday!
 *
 * Usage:
 * const message = generateMessage("Jack", 25); // "Hey Jack, happy 25 birthday!"
 */
function generateMessage(name, age) {
    let string = `Hey ${name}, happy ${age} birthday!`;
    return string;
}

/**
 * This function capitalizes the first letter of every word in a sentence.
 *
 * @param {string} sentence - The sentence to be title cased.
 * @returns {string} - The title cased sentence.
 *
 * Usage:
 * const title = titleCase("hello world"); // title will be "Hello World"
 */
function titleCase(sentence) {
    let string = sentence.replace(/\b\w/g, char => char.toUpperCase());
    return string;
}

/**
 * This function returns the sum of a range of numbers in an array.
 *
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 * @returns {number} - The sum of the range.
 *
 * Usage:
 * const sum = sumOfRange(1, 4); // sum will be 10
 */
function sumOfRange(start, end) {
    let sum = 0;
    const arrayOfNumbers = [];
    for (i = 0; i <= end - start; i++) {
        if (arrayOfNumbers.length == 0) {
            arrayOfNumbers.push(start);
        } else if (end - start >= 1) {
            arrayOfNumbers.push(arrayOfNumbers[i-1]+1);
        }
    }
    for (i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    return sum;
}


/**
 * This function generates an acronym from the first letter of each word in a sentence, ignoring words with numbers.
 *
 * @param {string} sentence - The sentence to create an acronym from.
 * @returns {string} - The generated acronym.
 *
 * Usage:
 * const acronym = generateAcronym("Open 24 Hours a Day"); // acronym will be "OHAD"
 * const anotherAcronym = generateAcronym("Federal Bureau Investigation"); // anotherAcronym will be "FBI"
 */
function generateAcronym(sentence) {
    let newSentence = "";
    let wordsArray = sentence.split(" ");
    let wordsArrayFiltered = wordsArray.filter(word => !/\d/.test(word));
    let firstLetter = wordsArrayFiltered.map(word => word.charAt(0));
    for (i = 0; i < firstLetter.length; i++) {
        newSentence += firstLetter[i].toUpperCase();
    }
    return newSentence;
}


/**
 * This function counts consonants in a string, with lowercase counting as 1 and uppercase as 2.
 *
 * @param {string} str - The input string.
 * @returns {number} - The calculated "weighted" consonant count.
 *
 * Usage:
 * const consonantCount = countConsonantsWeighted("Hello World!"); // consonantCount will be 9
 * const anotherCount = countConsonantsWeighted("JavaScript"); // anotherCount will be 9
 */

function countConsonantsWeighted(str) {
    let charactersArray = Array.from(str);
    let lowercaseRegex = /[bcdfghjklmnpqrstvwxyz]/;
    let uppercaseRegex = /[BCDFGHJKLMNPQRSTVWXYZ]/;
    let lowercaseCharactersArrayFiltered = charactersArray.filter(char => lowercaseRegex.test(char) && !/\d|[!@#$%,.\s]/.test(char));
    let uppercaseCharactersArrayFiltered = charactersArray.filter(char => uppercaseRegex.test(char) && !/\d|[!@#$%,.\s]/.test(char));
    let lowercaseConsonantCount = lowercaseCharactersArrayFiltered.length;
    let uppercaseConsonantCount = uppercaseCharactersArrayFiltered.length * 2;
    let consonantCount = lowercaseConsonantCount + uppercaseConsonantCount;
    return consonantCount;
}