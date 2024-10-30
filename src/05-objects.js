/**
 * This function returns an object that has the properties: 'name', 'age', and 'city'.
 *
 * @returns {Object} - An object with properties 'name', 'age', and 'city'.
 *
 * Usage:
 * const person = createPersonObject();
 * // person might be { name: 'John Doe', age: 30, city: 'New York' }
 */
function createPersonObject() {
    let arrayOfObjects = (
        {
            name: "John Doe",
            age: 30,
            city: "New York"
        }
);
    return arrayOfObjects;
}


/**
 * This function returns the name of the given person object.
 *
 * @param {Object} person - The person object.
 * @returns {string} - The name of the person.
 *
 * Usage:
 * const personName = getPersonName({ name: 'John Doe', age: 30, city: 'New York' });
 * // personName will be 'John Doe'
 */
function getPersonName(person) {
    let nameOfPerson = person.name;
    return nameOfPerson;
}


/**
 * This function finds a person from an array of persons based on their name.
 *
 * @param {Object[]} persons - Array of person objects.
 * @param {string} name - Name of the person to be found.
 * @returns {Object} - The person object with the given name, or null if not found.
 *
 * Usage:
 * const john = findPersonByName([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }], 'John Doe');
 * console.log(john); // Outputs { name: 'John Doe', age: 30 }
 *
 */
function findPersonByName(persons, name) {
    let findPerson = persons.find(person => person.name === name);
    return findPerson
}


/**
 * This function calculates the total age of all persons in an array.
 *
 * @param {Object[]} persons - Array of person objects.
 * @returns {number} - The total age of all persons.
 *
 * Usage:
 * const totalAge = getTotalAge([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }]);
 * // totalAge will be 55
 */
function getTotalAge(persons) {
    let sumOfAge = 0;
    for (i = 0; i < persons.length; i++) {
        sumOfAge += persons[i].age;
    }
    return sumOfAge;
}


/**
 * This function checks for duplicate email addresses in an array of users.
 *
 * @param {Object[]} users - An array of user objects with an email property.
 * @returns {boolean} - True if duplicate emails are found, otherwise false.
 *
 * Usage:
 * const users = [
 *   { email: 'alice@example.com' },
 *   { email: 'bob@example.com' },
 *   { email: 'alice@example.com' }
 * ];
 * const hasDuplicates = checkForDuplicateEmails(users); // true
 */
function checkForDuplicateEmails(users) {
    let arrayOfEmails = [];
    for (let i = 0; i < users.length; i++) {
        arrayOfEmails.push(users[i].email);
    }
    let emailSet = new Set();
    for (let email of arrayOfEmails) {
        if (emailSet.has(email)) {
            return true;
        }
        emailSet.add(email);
    }
    return false;
}