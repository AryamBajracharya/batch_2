//push()
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "orange"]

//pop()
let fruit = ["apple", "banana", "orange"];
fruit.pop();
console.log(fruit); // Output: ["apple", "banana"]

//find()
let a = ["apple", "banana", "orange"];
let index = a.indexOf("banana");
console.log(index); // Output: 1

//filter()
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//map()
let number = [1, 2, 3, 4, 5];
let squaredNumbers = number.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//sort()
let b = ["banana", "orange", "apple"];
fruits.sort();
console.log(b); // Output: ["apple", "banana", "orange"]

//reduce()
let num = [1, 2, 3, 4, 5];
let sum = num.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15
