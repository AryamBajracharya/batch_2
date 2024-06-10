// 1. Create two variables, one for your name and another for your age. Print a sentence combining those variables.


let fullName = "Aryam Bajracharya"; 
let age = 19; 
console.log("My name is "+fullName+ " and I am "+ age + " years old.");

// Another method 

console.log(`My name is ${fullName} and I am ${age} years old.`); 



// 2. Assign the value 10 to a variable. Then multiply that variable by itself and store the result in another variable. Print the final value.


let value = 10;
let result = value * value;
console.log("Result of multiplying the value by itself is: " + result);



// 3. Write code to check if the character stored in a variable is uppercase or lowercase. Print "uppercase" or "lowercase" accordingly.


let character = 'G';
if (character >= 'G' && character <= 'Z') {
    console.log("Uppercase");
} else if (character >= 'g' && character <= 'z') {
    console.log("Lowercase");
} else {
    console.log("The character is not a letter.");
}



// 4. Declare two variables with numeric values. Add them together and print the sum. Then, subtract the smaller number from the larger number and store the difference in a new variable. Print the difference.


let num1 = 10;
let num2 = 7;
let sum = num1 + num2;

console.log("The sum of the numbers is: " + sum);

let difference = Math.abs(num1 - num2);
console.log("The difference between the numbers is: " + difference);



// 5. Imagine you have a variable storing a product price. Write code to apply a 10% discount and print the discounted price.

let productPrice = 100; 
let discount = productPrice * 0.1; // 10% discount = 10/100 = 0.1
let discountedPrice = productPrice - discount;
console.log("The discounted price is: " + discountedPrice);
