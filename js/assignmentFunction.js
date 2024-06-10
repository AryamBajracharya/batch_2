// Write a function that takes two parameters and returns their sum.

function sum(num1, num2){
    return(`Sum of these two numbers: ${num1+num2}`);
}
console.log(sum(60, 9));



// Create a function that calculates the average of an array of numbers.

const array = [1,2,3,4,5];
const average = calculateAverage(array);

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0; // Return 0 if the array is empty to avoid division by zero
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    return sum / numbers.length;
}
console.log(average);



// Write a function that checks if a given number is even or odd.

function isEvenOrOdd(number) {
    return number % 2 === 0 ? 'even' : 'odd';
}
console.log(isEvenOrOdd(3,4));



// Create a function that reverses a string.

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('irut'));


// Write a function that finds the maximum value in an array of numbers.

function findMaxValue(numbers) {
    return Math.max(...numbers);
}
console.log(findMaxValue([1, 2, 3, 4, 5])); 



//Create a function that converts Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(100));



// Write a function that generates a random number between a given minimum and maximum.

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(1,10));



// Create a function that checks if a string is a palindrome.

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome('racecar'));



// Write a function that capitalizes the first letter of each word in a sentence.

function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeFirstLetter('hello world'));



// Create a function that returns the factorial of a given number.

function factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(7));


// Write a function that counts the number of occurrences of a specific element in an array.

function countOccurrences(array, element) {
    return array.reduce((count, current) => current === element ? count + 1 : count, 0);
}
console.log(countOccurrences([1,2,2,3,4,2], 2));


// Create a function that checks if a given year is a leap year.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2021));



// Write a function that merges two arrays and returns the sorted result.

function mergeAndSortArrays(array1, array2) {
    return [...array1, ...array2].sort((a, b) => a - b);
}
console.log(mergeAndSortArrays([3,1,4], [5,2,6]));


// Create a function that converts a number to its Roman numeral representation.

function toRoman(num) {
    const romanNumeralMap = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    let roman = '';
    for (const { value, numeral } of romanNumeralMap) {
        while (num >= value) {
            roman += numeral;
            num -= value;
        }
    }
    return roman;
}
console.log(toRoman(1990)); 



// Write a function that finds the second smallest element in an array of numbers.

function secondSmallest(numbers) {
    if (numbers.length < 2) return null;
    let first = Infinity, second = Infinity;
    for (const num of numbers) {
        if (num < first) {
            second = first;
            first = num;
        } else if (num < second && num !== first) {
            second = num;
        }
    }
    return second;
}
console.log(secondSmallest([3,1,2,4]));



// Create a function that calculates the area of a circle given its radius.

function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}
console.log(areaOfCircle(5));



// Write a function that truncates a string if it exceeds a specified length and appends &quot;...&quot; to the end.

function truncateString(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}
console.log(truncateString('Hello, world!', 5));



// Create a function that checks if a given string contains only digits.

function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}
console.log(containsOnlyDigits('12345'));



// Write a function that removes all falsy values (false, null, 0, &quot;&quot;, undefined, and NaN) from an array.

function removeFalsyValues(array) {
    return array.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, '', 3, null, 'a']));



// Create a function that generates a new array with unique values from a given array.

function uniqueArray(array) {
    return [...new Set(array)];
}
console.log(uniqueArray([1,2,2,3,4,4,5]));