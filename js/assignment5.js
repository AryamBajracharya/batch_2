

// 1. Function to add two numbers

function add(num1, num2, callback) {
    let result = num1 + num2;
    callback(result);
}

add(3, 4, (result) => {
    console.log(result); 
});



// 2. Function to get the first element of an array

function getFirstElement(array, callback) {
    let result = array[0];
    callback(result);
}

getFirstElement([1, 2, 3, 4], (result) => {
    console.log(result);
});



// 3. Object person and function to get person's details

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

function getPersonInfo(person, callback) {
    let result = `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`;
    callback(result);
}

getPersonInfo(person, (result) => {
    console.log(result);
});



// 4. Function to convert a string to uppercase

function toUpperCase(str, callback) {
    let result = str.toUpperCase();
    callback(result);
}

toUpperCase("hello world", (result) => {
    console.log(result);
});



// 5. Function to multiply two numbers

function multiply(num1, num2, callback) {
    let result = num1 * num2;
    callback(result);
}

multiply(3, 4, (result) => {
    console.log(result); 
});




// 6. Function to get the last element of an array

function getLastElement(array, callback) {
    let result = array[array.length - 1];
    callback(result);
}

getLastElement([1, 2, 3, 4], (result) => {
    console.log(result); 
});




// 7. Object book and function to get the book's title

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

function getBookTitle(book, callback) {
    let result = book.title;
    callback(result);
}

getBookTitle(book, (result) => {
    console.log(result); 
});




// 8. Function to reverse a string

function reverseString(str, callback) {
    let result = str.split("").reverse().join("");
    callback(result);
}

reverseString("hello", (result) => {
    console.log(result); 
});




// 9. Function to check if a number is even

function isEven(num, callback) {
    let result = num % 2 === 0;
    callback(result);
}

isEven(4, (result) => {
    console.log(result); 
});

isEven(3, (result) => {
    console.log(result); 
});




// 10. Function to sum all numbers in an array

function sumArray(numbers, callback) {
    let result = numbers.reduce((sum, num) => sum + num, 0);
    callback(result);
}

sumArray([1, 2, 3, 4], (result) => {
    console.log(result); 
});




// 11. Object car and function to get the car's model

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

function getCarModel(car, callback) {
    let result = car.model;
    callback(result);
}

getCarModel(car, (result) => {
    console.log(result); 
});




// 12. Function to concatenate two strings

function concatenateStrings(str1, str2, callback) {
    let result = str1 + str2;
    callback(result);
}

concatenateStrings("Hello, ", "World!", (result) => {
    console.log(result); 
});




// 13. Function to square a number

function square(num, callback) {
    let result = num * num;
    callback(result);
}

square(5, (result) => {
    console.log(result); 
});




// 14. Function to find the maximum number in an array

function findMax(numbers, callback) {
    let result = Math.max(...numbers);
    callback(result);
}

findMax([1, 2, 3, 4, 5], (result) => {
    console.log(result); 
});




// 15. Object student and function to get the student's full name

let student = {
    firstName: "Jane",
    lastName: "Doe",
    grade: "A"
};

function getFullName(student, callback) {
    let result = `${student.firstName} ${student.lastName}`;
    callback(result);
}

getFullName(student, (result) => {
    console.log(result); 
});




// 16. Function to greet a person

function greet(name, callback) {
    let result = `Namaste, ${name}!`;
    callback(result);
}

greet("Alice", (result) => {
    console.log(result); 
});




// 17. Function to double each number in an array

function doubleArray(numbers, callback) {
    let result = numbers.map(num => num * 2);
    callback(result);
}

doubleArray([1, 2, 3, 4], (result) => {
    console.log(result); 
});




// 18. Object movie and function to get the movie's title

let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010
};
function getMovieTitle(movie, callback) {
    let result = movie.title;
    callback(result);
}

getMovieTitle(movie, (result) => {
    console.log(result); 
});




// 19. Function to get the length of a string

function getLength(str, callback) {
    let result = str.length;
    callback(result);
}

getLength("hello world", (result) => {
    console.log(result); 
});




// 20. Function to subtract two numbers

function subtract(num1, num2, callback) {
    let result = num1 - num2;
    callback(result);
}

subtract(10, 5, (result) => {
    console.log(result); 
});




// 21. Function to merge two arrays

function mergeArrays(arr1, arr2, callback) {
    let result = arr1.concat(arr2);
    callback(result);
}

mergeArrays([1, 2], [3, 4], (result) => {
    console.log(result); 
});




// 22. Object recipe and function to get the ingredient list

let recipe = {
    name: "Pancakes",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar"],
    servings: 4
};
function getIngredientList(recipe, callback) {
    let result = recipe.ingredients;
    callback(result);
}

getIngredientList(recipe, (result) => {
    console.log(result); 
});




// 23. Function to check if a string ends with a given character

function endsWith(str, char, callback) {
    let result = str.endsWith(char);
    callback(result);
}

endsWith("hello", "o", (result) => {
    console.log(result); 
});
endsWith("hello", "a", (result) => {
    console.log(result); 
});




// 24. Function to divide two numbers

function divide(num1, num2, callback) {
    let result = num1 / num2;
    callback(result);
}

divide(10, 2, (result) => {
    console.log(result); 
});




// 25. Function to remove the first element of an array

function removeFirstElement(array, callback) {
    let result = array.slice(1);
    callback(result);
}

removeFirstElement([1, 2, 3, 4], (result) => {
    console.log(result);
});




// 26. Object album and function to get the track count

let album = {
    title: "Thriller",
    artist: "Michael Jackson",
    tracks: ["Wanna Be Startin' Somethin'", "Thriller", "Beat It"]
};
function getTrackCount(album, callback) {
    let result = album.tracks.length;
    callback(result);
}

getTrackCount(album, (result) => {
    console.log(result); 
});




// 27. Function to check if a string starts with a given character

function startsWith(str, char, callback) {
    let result = str.startsWith(char);
    callback(result);
}

startsWith("hello", "h", (result) => {
    console.log(result); 
});
startsWith("hello", "a", (result) => {
    console.log(result); 
});




// 28. Function to check if a number is positive

function isPositive(num, callback) {
    let result = num > 0;
    callback(result);
}

isPositive(5, (result) => {
    console.log(result); 
});
isPositive(-3, (result) => {
    console.log(result); 
});
isPositive(0, (result) => {
    console.log(result); 
});




// 29. Function to count the number of elements in an array

function countElements(array, callback) {
    let result = array.length;
    callback(result);
}

countElements([1, 2, 3, 4, 5], (result) => {
    console.log(result); 
});




// 30. Object game and function to get the platform list

let game = {
    name: "The Legend of Zelda",
    genre: "Action-adventure",
    platforms: ["Nintendo Switch", "Wii U"]
};
function getPlatformList(game, callback) {
    let result = game.platforms;
    callback(result);
}

getPlatformList(game, (result) => {
    console.log(result); 
});

