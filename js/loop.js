// //  Write a for loop that prints numbers from 1 to 5 in the console.

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// //  Using a while loop, print even numbers from 2 to 10 (inclusive) in the console.

// let num = 2;

// while (num <= 10) {
//     console.log(num);
//     num += 2;
// }


// // Write a for loop to calculate the sum of numbers from 1 to 10.

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log("Sum:", sum);


// // Using a while loop, find the factorial of a given number (e.g., 5).

// let num = 5;
// let factorial = 1;

// while (num > 1) {
//     factorial *= num;
//     num--;
// }
// console.log("Factorial:", factorial);


// // Write a for loop that prints the square of numbers from 1 to 5.

// for (let i = 1; i <= 5; i++) {
//     console.log(i * i);
// }


// // Using a while loop, print the cube of numbers from 1 to 5.

// let num = 1;

// while (num <= 5) {
//     console.log(num * num * num);
//     num++;
// }


// // Write a for loop to iterate through an array of names and print each name in the console.

// const names = ["Alice", "Bob", "Charlie", "David"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// // Using a while loop, find the sum of elements in an array of numbers.

// const numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// let index = 0;

// while (index < numbers.length) {
//     sum += numbers[index];
//     index++;
// }
// console.log("Sum:", sum);


// // Write a for loop that prints the elements of an array in reverse order.

// const fruits = ["apple", "banana", "orange", "kiwi"];

// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }


// // Using a while loop, find the largest number in an array of numbers.


// const numbers = [25, 10, 45, 30, 15];
// let largest = numbers[0];
// let index = 1;

// while (index < numbers.length) {
//     if (numbers[index] > largest) {
//         largest = numbers[index];
//     }
//     index++;
// }
// console.log("Largest Number:", largest);


// // Write a for loop to calculate the sum of all even numbers from 1 to 20.


// let sum = 0;

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log("Sum of even numbers:", sum);


// // Using a while loop, find the product of all odd numbers from 1 to 15.

// let num = 1;
// let product = 1;

// while (num <= 15) {
//     if (num % 2 !== 0) {
//         product *= num;
//     }
//     num++;
// }
// console.log("Product of odd numbers:", product);


// // Write a for loop to print the following pattern:


// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '*';
//     }
//     console.log(row);
// }


// // Using a while loop, print the numbers from 10 to 1 in descending order.

// let num = 10;

// while (num > 0) {
//     console.log(num);
//     num--;
// }


// // Write a for loop to calculate the factorial of a given number (e.g., 6).

// let num = 6;
// let factorial = 1;

// for (let i = num; i > 0; i--) {
//     factorial *= i;
// }
// console.log("Factorial:", factorial);


// //  Using a while loop, find the sum of digits of a given number (e.g., 123).

// let num = 123;
// let sum = 0;

// while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }
// console.log("Sum of digits:", sum);


// // Write a for loop to print the following pattern:


// for (let i = 5; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += i;
//     }
//     console.log(row);
// }


// // Using a while loop, print the first 10 Fibonacci numbers.

// let a = 0, b = 1, n = 10;

// console.log(a);
// console.log(b);

// let count = 2;

// while (count < n) {
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
//     count++;
// }


// // Write a for loop to find and print the prime numbers between 1 and 20.


// for (let num = 2; num <= 20; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num);
//     }
// }


// // Using a while loop, reverse a given number (e.g., 12345).

// let num = 12345;
// let reversed = 0;
// while (num !== 0) {
//     reversed = reversed * 10 + num % 10;
//     num = Math.floor(num / 10);
// }
// console.log("Reversed number:", reversed);


// // Write a for loop to print the multiplication table of a given number (e.g., 5) up to 10.


// const num = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + num * i);
// }


// // Using a while loop, find the largest element in an array of numbers.

// const numbers = [12, 43, 7, 25, 39];
// let largest = numbers[0];
// let index = 1;

// while (index < numbers.length) {
//     if (numbers[index] > largest) {
//         largest = numbers[index];
//     }
//     index++;
// }
// console.log("Largest Number:", largest);


// // Write a for loop to print the following pattern:

// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += i;
//     }
//     console.log(row);
// }


// // Using a while loop, find the number of digits in a given number (e.g., 1234).

// let number = 1234;
// let count = 0;

// while (number !== 0) {
//     number = Math.floor(number / 10);
//     count++;
// }
// console.log("Number of digits:", count);


// // Write a for loop to calculate the sum of all odd numbers from 1 to 50.

// let sum = 0;
// for (let i = 1; i <= 50; i += 2) {
//     sum += i;
// }
// console.log("Sum of odd numbers:", sum);


// // Using a while loop, print the numbers from 1 to 100, but skip the multiples of 5.

// let num = 1;
// while (num <= 100) {
//     if (num % 5 !== 0) {
//         console.log(num);
//     }
//     num++;
// }


// // Write a for loop to print the reverse of a given string (e.g., "hello").

// const str = "hello";
// let reversedStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }
// console.log("Reversed string:", reversedStr);


// // Using a while loop, find the factorial of a given number (e.g., 7).

// let num = 7;
// let factorial = 1;

// while (num > 0) {
//     factorial *= num;
//     num--;
// }
// console.log("Factorial:", factorial);


// // Write a for loop to print the following pattern:

// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }
//     console.log(row);
// }


// // Using a while loop, find the sum of all elements in a multidimensional array of numbers.

// const numbers = [[1, 2], [3, 4], [5, 6]];
// let sum = 0;
// let i = 0;

// while (i < numbers.length) {
//     let j = 0;
//     while (j < numbers[i].length) {
//         sum += numbers[i][j];
//         j++;
//     }
//     i++;
// }
// console.log("Sum:", sum);





