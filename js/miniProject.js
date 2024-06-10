
// Task 1: Promises

function fetchData() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve([
                    { id: 1, name: 'Alice', age: 25 },
                    { id: 2, name: 'Bob', age: 30 },
                    { id: 3, name: 'Charlie', age: 35 },
                ]);
            } else {
                reject('Failed to fetch data');
            }
        }, 2000);
    });
}

fetchData()
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error('Error:', error));




// Task 2: Closures

function createCounter() {

    let count = 0;
    return {
        increment: () => count++,
        getCount: () => count,
    };
}

const counter = createCounter();
counter.increment();
console.log('Counter after increment:', counter.getCount());
counter.increment();
console.log('Counter after another increment:', counter.getCount()); 




// Task 3: Callbacks

function processData(numbers, callback) {

    return numbers.map(callback);
}

const numbers = [1, 2, 3, 4];
const doubled = processData(numbers, num => num * 2);
console.log('Doubled numbers:', doubled); 



// Task 4: Async/Await

async function fetchDataAsync() {

    try {
        const data = await fetchData();
        console.log('Fetched data with async/await:', data);
    } catch (error) {
        console.error('Error with async/await:', error);
    }
}

(async () => {
    await fetchDataAsync();
})();




// Task 5: Array Manipulation: Map

function doubleNumbers(numbers) {

    return numbers.map(num => num * 2);
}
console.log('Doubled numbers:', doubleNumbers([1, 2, 3, 4])); 




// Task 6: Array Manipulation: Filter

function filterNumbers(numbers) {

    return numbers.filter(num => num >= 10);
}
console.log('Filtered numbers:', filterNumbers([5, 10, 15, 20])); 




// Task 7: Array Manipulation: Find

function findNumber(numbers) {

    return numbers.find(num => num > 15);
}
console.log('Found number:', findNumber([5, 10, 15, 20])); 




// Task 8: Array Manipulation: Reduce

function sumNumbers(numbers) {

    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log('Sum of numbers:', sumNumbers([1, 2, 3, 4])); 




// Task 9: Object Manipulation

function transformUsers(users) {

    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}

const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];
console.log('Transformed users:', transformUsers(users)); 




// Task 10: Classes and Objects

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}


// Task 11: Inheritance
class Student extends Person {

    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying.`;
    }
}

const person = new Person('John Doe', 40);
console.log(person.describe()); 

const student = new Student('Jane Doe', 20, 'A');
console.log(student.describe());
console.log(student.study());    




// Task 14: Complex Array Manipulation

function getUniqueHobbies(users) {

    return [...new Set(users.flatMap(user => user.hobbies))];
}

const hobbyUsers = [
    { name: 'Alice', hobbies: ['reading', 'swimming'] },
    { name: 'Bob', hobbies: ['reading', 'cycling'] },
    { name: 'Charlie', hobbies: ['swimming', 'cycling'] }
];
console.log('Unique hobbies:', getUniqueHobbies(hobbyUsers)); 





// Conceptual Questions

/*
1. Why are promises used in JavaScript? Explain the advantages of using promises over traditional callback functions.

- Promises are used in JavaScript to handle asynchronous operations more efficiently. They provide a cleaner and more readable code structure than traditional callback functions, avoiding issues such as "callback hell" where nested callbacks become difficult to manage. Promises also make error handling more straightforward, allowing the use of .then() and .catch() for success and error cases, respectively.




2. What is a closure in JavaScript? Provide an example.

- A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. This means a closure can remember and access variables from its outer function even after the outer function has finished executing. 

Example:

function outer() { 
    let x = 1; 
    return function() { 
        return x; 
    } 
}
const inner = outer();
console.log(inner()); 



3. What is a callback function and why is it used in JavaScript?

- A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are used to handle asynchronous operations, such as reading files, making API requests, or handling user inputs/events, allowing the program to continue running while waiting for the asynchronous operation to complete.




4. What are async/await in JavaScript and how do they improve asynchronous programming?

- Async/await are syntactic features in JavaScript that allow for easier handling of promises. They enable asynchronous code to be written in a synchronous style, which improves readability and maintainability. `async` is used to declare a function that returns a promise, and `await` is used to pause execution until the promise is resolved or rejected, allowing for a more straightforward way to handle asynchronous operations.




5. Write the difference between ES6 and JS.

- ES6 (ECMAScript 2015) is a major update to the JavaScript language, introducing many new features and syntax improvements. JavaScript is the language itself, and ES6 is a version of the ECMAScript specification that defines the language. Essentially, ES6 is a modern version of JavaScript with enhanced capabilities.




6. What are some of the major features introduced in ES6?

- Major features introduced in ES6 include:


- Arrow functions: Shorter syntax for function expressions.

- Classes: Syntactic sugar for creating objects and handling inheritance.

- Template literals: Enhanced string interpolation using backticks (`).

- Destructuring: Syntax for unpacking values from arrays or properties from objects.

- Default parameters: Function parameters with default values.

- Rest and spread operators: Syntax for variable arguments and array/object manipulation.

- let and const: Block-scoped variables and constants.

- Promises: Built-in support for asynchronous programming.

- Modules: Syntax for importing and exporting code in a modular fashion.

**/
