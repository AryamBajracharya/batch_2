

// 1. Password Strength Checker: Write code using if/else statements to check the strength of a password based on its length. Print messages like &quot;Strong password,&quot; &quot;Medium password,&quot; or &quot;Weak password&quot; depending on the length criteria (e.g., strong: &gt; 12 characters, medium: 8-12 characters, weak: less than 8 characters).


let password = "aryam123";

    if (password.length > 12) {
        console.log("Strong password");
    } else if (password.length >= 8) {
        console.log("Medium password");
    } else {
        console.log("Weak password");
    }



// 2. Vowel or Consonant: Write a program using if/else to determine if a character entered by the user is a vowel (a, e, i, o, u) or a consonant. Consider uppercase and lowercase letters.

let char = "a";
let vowels = "aeiouAEIOU";

if (vowels.includes(char)) {
    console.log(char + " is a vowel");
} else {
    console.log(char + " is a consonant");
}



// 3. Number Guessing Game: Create a simple guessing game using if/else statements.Generate a random number between 1 and 10 and allow the user to guess it. Print messages like &quot;Correct!&quot; or &quot;Guess higher/lower&quot; based on their input.

let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = 7; 

if (userGuess === randomNumber) {
    console.log("Correct!");
} else if (userGuess < randomNumber) {
    console.log("Guess higher");
} else {
    console.log("Guess lower");
}



// 4. Calculate Price with Tax: Write code using if/else to calculate the final price of a product considering a sales tax rate (e.g., 8%). Take the product price and tax rate as inputs and print the final price with tax.

let price = 100; 
let taxRate = 3; 
let finalPrice = price + (price * taxRate / 100);

console.log("The final price with tax is $" + finalPrice.toFixed(2));



// 5. Simple Calculator: Develop a basic calculator using if/else statements. Allow the user to enter two numbers and an operator (+, -, *, /). Based on the operator, perform the calculation and print the result.

let num1 = 10; 
let num2 = 5;  
let operator = "+"; 
let result;

if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    result = num1 / num2;
} else {
    console.log("Invalid operator");
}
console.log("The result is " + result);



// 6. Movie Rating Recommendation: Write code using switch/case to recommend a movie genre based on a user&#39;s age. Use different cases for age ranges (e.g., children, teenagers, adults) and suggest appropriate genres (e.g., animation, action, drama).

let age = 14;

if (age <= 12) {
    console.log("Recommended genre: Animation");
} else if (age <= 17) {
    console.log("Recommended genre: Action");
} else if (age >= 18) {
    console.log("Recommended genre: Drama");
} else {
    console.log("Invalid age");
}



// 7. Weekend or Weekday Checker: Create a program using if/else to determine if a given date (e.g., stored in a variable) falls on a weekend (Saturday or Sunday).

let dateInput = "2024-05-22"; 
let date = new Date(dateInput);
let day = date.getDay();

if (day === 6 || day === 0) {
    console.log("It's a weekend");
} else {
    console.log("It's a weekday");
}



// 8. Positive, Zero, or Negative: Write code using if/else statements to check if a number is positive, zero, or negative. Print the corresponding message.

let number = -3; 

if (number > 0) {
    console.log("The number is positive");
} else if (number === 0) {
    console.log("The number is zero");
} else {
    console.log("The number is negative");
}



// 9. Multiple of 3 or 5: Create a program using if/else to determine if a number is divisible by 3, 5, or both. Print a message indicating divisibility or non-divisibility.

let multipleNumber = 15;

if (multipleNumber % 3 === 0 && multipleNumber % 5 === 0) {
    console.log("The number is divisible by both 3 and 5");
} else if (multipleNumber % 3 === 0) {
    console.log("The number is divisible by 3");
} else if (multipleNumber % 5 === 0) {
    console.log("The number is divisible by 5");
} else {
    console.log("The number is not divisible by 3 or 5");
}



// 10. Even or Odd Sum: Write code using if/else to check if the sum of two user-entered numbers is even or odd. Print the result.

let sumNum1 = 6; 
let sumNum2 = 9; 
let sum = sumNum1 + sumNum2;

if (sum % 2 === 0) {
    console.log("The sum is even");
} else {
    console.log("The sum is odd");
}